import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import {DiscussionsComponent} from "./discussions/discussions.component";
import {LoginRegisterComponent} from "./login-register/login-register.component";
import {LoginComponent} from "./login-register/login/login.component";
import {SignupComponent} from "./login-register/signup/signup.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'discussions', component:DiscussionsComponent},
  {path:'login-register' , component : LoginRegisterComponent, children:
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register' ,
          component : SignupComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
