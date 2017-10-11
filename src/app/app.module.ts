import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SecurityControl } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SenderPage } from '../pages/sender/sender';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SQLite} from "@ionic-native/sqlite";
import {SMS} from "@ionic-native/sms";
import {AndroidPermissions} from "@ionic-native/android-permissions";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    SecurityControl,
    HomePage,
    ListPage,
    SenderPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SecurityControl),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SecurityControl,
    HomePage,
    ListPage,
    SenderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SMS,
    AndroidPermissions

  ]
})
export class AppModule {}
