**Finger- Attendace**

This Uses digitalPersona fingerprint recognition system to run a fingerprint attendance system running on electron

**Requirement**
Install https://crossmatch.hid.gl/lite-client/ installed on your windows machine to get it to work
No mac support

**Installation**
- npm install after cloning the repo
- if WebSDK error {
**- Could not resolve "WebSdk"

    node_modules/@digitalpersona/devices/dist/es5/devices/websdk/channel.js:3:7:
      3 │ import 'WebSdk';**
  } after install link a path to WebSdk by replacing the import with **"import '../../../../../../../../finger-attendance/modules/websdk/index';"**

  -npm start to run the application
