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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SearchZoneComponent,
    ZoneListComponent,
    NewsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD-L2ycJQ4mBv5vCzcQwYlo4LKUji1fC68'
    }),
  ],
  providers: [ZoneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
