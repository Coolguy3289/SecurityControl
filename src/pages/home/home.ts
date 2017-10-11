import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage, public alertctrl: AlertController) {

  }


  SystemSubmission(Name, Number){
    console.log("SystemName is " + Name);
    console.log("System Number is " + Number);
    this.storage.set(Name, Number).then(() => console.log("Wrote successfully to Storage"), () => (console.log("Something broke during write!")));
  }
  DataCheck(){
    this.storage.get('Name').then((val => {
      let alert = this.alertctrl.create({
        title: 'Data!',
        subTitle: val,
        buttons: ['OK']
      })
      alert.present();
    }));


  }
}
