import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, private sms: SMS, private sqlite: SQLite) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {


        db.executeSql('select systemName from securitySystems', {})
          .then(() => console.log('Executed SQL Creation/Opening'))
          .catch(e => console.log(e));

      })
      .catch(e => console.log(e));


  }

  armSend() {
    // Send a text message using default options
    this.sms.send('416123456', 'Arm all');
  }
  disarmSend() {
    // Send a text message using default options
    this.sms.send('416123456', 'Disarm all');
  }
  statusSend() {
    // Send a text message using default options
    this.sms.send('416123456', 'Status');
  }



}
