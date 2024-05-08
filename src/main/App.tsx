import React from 'react';
import { FingerprintSigninControl } from '../components/index';

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, Electron and React!</h1>
            <div className="reader-communication-error">
    Cannot connect to you fingerprint device. Make sure the device is connected.
    If you do not use DigitalPersona Workstation, you may need to download and install
    <a href="https://crossmatch.hid.gl/lite-client">DigitalPersona Lite Client</a>.
</div>
<FingerprintSigninControl/>

        </div>
    );
}

export default App;
