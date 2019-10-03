import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from "firebase";
import {AuthService} from "../shared/auth.service";
import {ZoneShareService} from "../shared/zone-share.service";

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {
  userPresent : Boolean;
  user : firebase.User;
  zone : object ;
  constructor(private authService : AuthService ,
              private router : Router,
              private data : ZoneShareService
  ){}

  ngOnInit() {
    this.authService.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        this.userPresent = true;
        this.data.currentZone.subscribe(zone=> this.zone = zone)
        console.log(this.zone)
      } else {
        this.userPresent = false;
        this.router.navigate(['/login-register/login'])
      }
    });
  }

}
