import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private sqlite: SQLite) {

  }
  SystemSubmission(Name, Number){
    console.log(Name);
    console.log(Number);
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {


        db.executeSql('create table securitySystems(systemName VARCHAR(32), systemNumber INT(10))', {})
          .then(() => console.log('Executed SQL Creation/Opening'))
          .catch(e => console.log(e));
        db.executeSql("insert into securitySystems(systemName, systemNumber) values("+Name+", "+Number+")", {})
          .then(() => console.log('Inserting Data into SQLite File'))
          .catch(e => console.log(e));

      })
      .catch(e => console.log(e));


  }
}
