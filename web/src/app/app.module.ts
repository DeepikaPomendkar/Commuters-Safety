import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchZoneComponent } from './home/search-zone/search-zone.component';
import {ZoneServiceService} from './shared/zone-service.service';
import { ZoneListComponent } from './home/zone-list/zone-list.component';
import { NewsComponent } from './home/news/news.component';
import {AgmCoreModule} from '@agm/core';
import { MapsComponent } from './home/maps/maps.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login-register/login/login.component';
import { SignupComponent } from './login-register/signup/signup.component';
import {AuthService} from "./shared/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/auth";
import { FeedComponent } from './discussions/feed/feed.component';
import {ZoneShareService} from "./shared/zone-share.service";
import { ChatFormComponent } from './discussions/chat-form/chat-form.component';
import {ChatService} from "./shared/chat.service";
import { MessagesComponent } from './discussions/feed/messages/messages.component';
import { ChatroomComponent } from './discussions/chatroom/chatroom.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SearchZoneComponent,
    ZoneListComponent,
    NewsComponent,
    MapsComponent,
    DiscussionsComponent,
    LoginRegisterComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent,
    ChatFormComponent,
    MessagesComponent,
    ChatroomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-L2ycJQ4mBv5vCzcQwYlo4LKUji1fC68'
    }),
    ReactiveFormsModule,
  ],
  providers: [
    ZoneServiceService,
    AuthService,
    AngularFireAuth,
    ZoneShareService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
