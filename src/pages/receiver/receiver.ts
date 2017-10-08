import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-receiver',
  templateUrl: 'receiver.html'
})
export class ReceiverPage {

  constructor(public navCtrl: NavController, private sms: SMS, private sqlite: SQLite) {}

  armSend() {
    // Send a text message using default options
    this.sms.send('4179868063', 'Arm all');
  }
  disarmSend() {
    // Send a text message using default options
    this.sms.send('4179868063', 'Disarm all');
  }
  statusSend() {
    // Send a text message using default options
    this.sms.send('4179868063', 'Status');
  }



}
