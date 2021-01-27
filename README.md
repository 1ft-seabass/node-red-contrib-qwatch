# node-red-contrib-qwatch

The node accessing for IODATA Qwatch network camera API.

The node tested Qwatch TS-NS110W and TS-WRLP. Because they are devices that main committer (1ft-seabass) is using. :)

## Install

Move your Node-RED user directory ~/.node-red

```
npm i node-red-contrib-qwatch
```

or

* Go to "Palette Manager" menu on your Node-RED.
* Search "node-red-contrib-qwatch" on Node-RED Library.
* Click "Install".

## Usage

### Prepare node-red-contrib-image-output node

This sample flow need also node-red-contrib-image-output node.

![image](https://i.gyazo.com/5b97aafbd8f140cf88cb537b4545605c.png)

Install it.

### Sample flow for snapshot:

```js
[{"id":"89c76fc9.b548e","type":"inject","z":"11cb14b2.1f95cb","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":380,"y":260,"wires":[["e241db8e.be7b88"]]},{"id":"dfe1a4d1.79c808","type":"debug","z":"11cb14b2.1f95cb","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":890,"y":240,"wires":[]},{"id":"e6f0c3e6.91bc7","type":"image","z":"11cb14b2.1f95cb","name":"","width":"480","data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":900,"y":300,"wires":[]},{"id":"e241db8e.be7b88","type":"qwatch-snapshot","z":"11cb14b2.1f95cb","name":"","setting":"dfac201.f94f3e","x":620,"y":260,"wires":[["dfe1a4d1.79c808","e6f0c3e6.91bc7"]]},{"id":"dfac201.f94f3e","type":"qwatch-config","z":"","name":"Setting1","serveraddress":"192.168.XX.XX","serverport":"XXXXX"}]
```

Import this flow. This is for getting datas.

![image](https://i.gyazo.com/c3b50f71162813e7427ac2aaa95c5f98.png)

This flow will place like this.

### Set Qwatch setting

![image](https://i.gyazo.com/cbb31c34f0f497d729a7044f52e7b821.png)

Edit the detail of Qwatch snapshot node.

![image](https://i.gyazo.com/8ae27514c69556ca48c1dab01e5a6350.png)

Edit Qwatch setting named "Setting1".

![image](https://i.gyazo.com/07bdcbd4989a8506d13a83aaced7b959.png)

Set these settings,

* Server Address
  * Qwatch Server Address
* Server Port
  * Qwatch Server Port
* Login ID
  * The ID can login to Qwatch admin page.
* Login Password
  * The password can login to Qwatch admin page.

Change settings. Deploy this flow after that.

### Click inject node

![image](https://i.gyazo.com/fa05c3e25b6eab76852978a2922fcf91.png)

The node will get a current snapshot from Qwatch when you clicked the inject node.

![image](https://i.gyazo.com/4abfe9b0c8ceaadcd39b61ebf002e597.jpg)

The node will get a current snapshot from Qwatch.

## History

* v0.0.1
  * First release.

## License

MIT License