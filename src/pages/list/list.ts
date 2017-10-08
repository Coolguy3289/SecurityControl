import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public database: SQLite;
  public securitySystems: any;

  constructor(private navController: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.create({name: "data.db", location: "default"}).then((db: SQLiteObject) => {
        this.refresh(db);
      }, (error) => {
        console.log("ERROR: ", error);
      });
    });
  }

  public refresh(db) {
    db.executeSql("SELECT * FROM securitySystems", []).then((data) => {
      this.securitySystems = [];
      if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
          this.securitySystems.push({systemName: data.rows.item(i).systemName, systemNumber: data.rows.item(i).systemNumber});
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

}
