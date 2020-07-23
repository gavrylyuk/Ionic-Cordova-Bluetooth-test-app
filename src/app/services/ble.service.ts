import {Injectable} from '@angular/core';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';
import {BLE} from '@ionic-native/ble/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable({
    providedIn: 'root'
})
export class BleService {

    constructor(
        public bluetoothle: BluetoothLE,
        private ble: BLE,
        private bluetoothSerial: BluetoothSerial
    ) {
    }

    ///////////////// BluetoothLE ////////////////


    public initBluetoothLE() {
        this.bluetoothle.initialize().subscribe(ble => {
            console.log('ble', ble.status);
        });
    }


    ////////////////// BLE ////////////////////

    public initBLE() {
        this.startScanBLE();
        this.showSettingsBLE();
    }

    private startScanBLE() {
        this.ble.startScan([]).subscribe((device) => {
            console.log(JSON.stringify(device));
        }, error => {
            console.log('ERROR', error);
        });
    }

    private scanBLE() {
        this.ble.scan([], 5).subscribe((device) => {
            console.log(JSON.stringify(device));
        }, error => {
            console.log('ERROR', error);
        });
    }

    private showSettingsBLE() {
        this.ble.showBluetoothSettings().then((settings) => {
            console.log('BLE SETTINGS', settings);
        });
    }

    //////////////// Bluetooth Serial /////////////////

    public initBluetoothSerial() {

        this.bluetoothSerial.isEnabled().then((isEnabled) => {
            console.log(isEnabled);
            if (!isEnabled) {
                this.bluetoothSerial.enable().then((resp) => {
                    console.log(resp);
                });
            }
        });

        this.bluetoothSerial.showBluetoothSettings().then((settings) => {
            console.log('Bluetooth Serial Settings', settings);
        }).catch((error: any) => {
            console.log('Bluetooth Serial Error', error);
        });

        this.bluetoothSerial.discoverUnpaired().then((unpairedDevices) => {
            console.log('Bluetooth Serial Unpaired Devices', unpairedDevices);
            this.bluetoothSerial.setDeviceDiscoveredListener().subscribe((device) => {
                console.log('Found: ' + device.id + device.name);
            });
        });
    }

}
