import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-sender',
  templateUrl: 'sender.html'
})
export class SenderPage {

  constructor(public navCtrl: NavController, private sms: SMS, private sqlite: SQLite, private androidPermissions: AndroidPermissions, public alertCtrl: AlertController) {}

  showAlertSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Command successfully sent!',
      buttons: ['OK']
    });
    alert.present();
  }
  armSend() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
      .then(success => console.log('Permission granted'),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS));
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.READ_SMS]);
    // Send a text message using default options
    this.sms.send('4179868063', 'Arm all').then(() => this.showAlertSuccess(), () => console.log("Failed to send message!"));
  }
  disarmSend() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
      .then(success => console.log('Permission granted'),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS));
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.READ_SMS]);
    // Send a text message using default options
    this.sms.send('4179868063', 'Disarm all').then(() => this.showAlertSuccess(), () => console.log("Failed to send message!"));
  }
  statusSend() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
      .then(success => console.log('Permission granted'),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS));
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.READ_SMS]);
    // Send a text message using default options
    this.sms.send('4179868063', 'Status').then(() => this.showAlertSuccess(), () => console.log("Failed to send message!"));
  }



}
