import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ZoneServiceService} from '../../shared/zone-service.service';
@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {
  commutersZone = [];
  constructor(private zoneservice: ZoneServiceService) { }

  ngOnInit() {
    this.zoneservice.getZone().subscribe(
      list => {
        this.commutersZone = list.map(item => {
          return {
            $key : item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

}
