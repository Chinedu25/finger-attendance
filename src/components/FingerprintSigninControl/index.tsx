import React, { useState, useEffect } from 'react';
import { FingerprintReader, SampleFormat, DeviceEvent, SamplesAcquired, ErrorOccurred } from '@digitalpersona/devices';

export const FingerprintSigninControl: React.FC = () => {
    const [reader, setReader] = useState<FingerprintReader | null>(null);

    useEffect(() => {
        const fpReader = new FingerprintReader();
        setReader(fpReader);

        const onDeviceConnected = (event: DeviceEvent) => {
            console.log('Device connected:', event);
        };

        const onDeviceDisconnected = (event: DeviceEvent) => {
            console.log('Device disconnected:', event);
        };

        const onQualityReported = (event: DeviceEvent) => {
            console.log('Quality reported:', event);
        };

        const onSamplesAcquired = (event: SamplesAcquired) => {
            console.log('Samples acquired:', event);
            // Process samples here
        };

        const onReaderError = (event: ErrorOccurred) => {
            console.error('Reader error:', event);
        };

        fpReader.on('DeviceConnected', onDeviceConnected);
        fpReader.on('DeviceDisconnected', onDeviceDisconnected);
        fpReader.on('QualityReported', onQualityReported);
        fpReader.on('SamplesAcquired', onSamplesAcquired);
        fpReader.on('ErrorOccurred', onReaderError);

        const startAcquisition = async () => {
            try {
                await fpReader.startAcquisition(SampleFormat.Intermediate);
            } catch (error) {
                console.error('Acquisition start error:', error);
              await  fpReader.stopAcquisition();
            }
        };

      

        startAcquisition();

        return () => {
            fpReader.off();
            setReader(null);
        };
    }, []);

    return (
        <div>
            <h2>Fingerprint Reader Status</h2>
            <p>Connect your fingerprint reader to start the process.</p>
        </div>
    );
};


