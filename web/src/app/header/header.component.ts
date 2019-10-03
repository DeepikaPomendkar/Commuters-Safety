import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : firebase.User;
  userPresent : Boolean;
  constructor(private authService : AuthService ,
              private router : Router
  ) { }

  ngOnInit() {
    this.authService.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        this.userPresent = true;
        // console.log(this.userPresent,this.user);
      } else {
        this.userPresent = false;
      }
    });
  }

  logoutUser(){
    this.authService.doLogout();
    this.userPresent=false;
    this.router.navigate(['/home']);
  }


}
