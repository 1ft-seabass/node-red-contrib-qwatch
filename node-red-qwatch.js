const DigestFetch = require('digest-fetch');

module.exports = function (RED) {

  function QwatchConfig(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    this.serveraddress = config.serveraddress;
    this.serverport = config.serverport;
  }
  RED.nodes.registerType("qwatch-config", QwatchConfig, {
    credentials: {
      loginid: {type:"text"},
      loginpassword: {type:"password"}
    }
  });

  function QwatchShapshot(config) {
    RED.nodes.createNode(this, config);

    this.current_setting = RED.nodes.getNode(config.setting);

    // console.log('this.current_setting',this.current_setting);
    
    let username = this.current_setting.credentials.loginid;
    let password = this.current_setting.credentials.loginpassword;
    let IPAddress = this.current_setting.serveraddress;
    let httpPort = this.current_setting.serverport;
    var node = this;
    node.on('input', async function (msg) {

      const client = new DigestFetch(username , password, { algorithm: 'MD5' });
      const url = 'http://' + IPAddress + ':' + httpPort + '/snapshot.jpg';
      const options = {};
      
      this.status({ fill: "blue", shape: "ring", text: "[" + this.current_setting.name + "] connecting..." });
      let resp = await client.fetch(url, options);
      this.status({ fill: "green", shape: "dot", text: "[" + this.current_setting.name + "] get buffer" });

      let buffer = await resp.buffer();
      msg.payload = buffer;
      node.send(msg);
    });
  }
  RED.nodes.registerType("qwatch-snapshot", QwatchShapshot, {});
}