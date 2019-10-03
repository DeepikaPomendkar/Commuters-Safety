import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZoneShareService {

  private zoneSource = new BehaviorSubject<object>(null);
  currentZone = this.zoneSource.asObservable();

  constructor() { }

  changeZone(zone : object){
    this.zoneSource.next(zone) ;
  }
}
