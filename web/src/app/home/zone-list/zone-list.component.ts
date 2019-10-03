import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ZoneServiceService} from '../../shared/zone-service.service';
import {ZoneShareService} from "../../shared/zone-share.service";
@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {
  commutersZone = [];
  zone : object ;
  constructor(private zoneservice: ZoneServiceService,
              private data : ZoneShareService
  ) { }

  ngOnInit(){
    this.zoneservice.getZone().subscribe(
      list => {
        this.commutersZone = list.map(item => {
          return {
            $key : item.key,
            ...item.payload.val()
          };
        });
        // console.log(this.commutersZone[0]);
      }

    );
    this.data.currentZone.subscribe(zone=> this.zone = zone)
  }
  newZone(zone : object)
  {
    this.data.changeZone(zone);
  }

}
