import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ZoneServiceService {
  zoneList: AngularFireList<any>
  constructor(private firebase: AngularFireDatabase) { }


  getZone() {
    this.zoneList = this.firebase.list('Zones');
    return this.zoneList.snapshotChanges();
  }
}
