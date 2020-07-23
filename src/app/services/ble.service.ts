import {Injectable} from '@angular/core';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';
import {BLE} from '@ionic-native/ble/ngx';

@Injectable({
    providedIn: 'root'
})
export class BleService {

    constructor(
        public bluetoothle: BluetoothLE,
        private ble: BLE,
    ) {
    }

    public initBluetoothLE() {
        this.bluetoothle.initialize().subscribe(ble => {
            console.log('ble', ble.status);
        });
    }


    /////// BLE ////////////////////

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

}
