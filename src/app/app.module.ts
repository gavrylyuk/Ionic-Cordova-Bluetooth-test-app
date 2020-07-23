import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';
import {BLE} from '@ionic-native/ble/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        BluetoothLE,
        BLE,
        BluetoothSerial,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
