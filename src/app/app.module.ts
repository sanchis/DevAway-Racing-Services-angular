import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { KartsService } from './services/karts.service';
import { PilotComponent } from './components/pilot/pilot.component';
import { RaceComponent } from './components/race/race.component';
import { RacesComponent } from './pages/races/races.component';
import { PilotsComponent } from './pages/pilots/pilots.component';
import { RacePositionsComponent } from './components/race-positions/race-positions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    PilotComponent,
    RaceComponent,
    RacesComponent,
    PilotsComponent,
    RacePositionsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [KartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//TODO TEST
//TODO readme
// https://github.com/filipows/angular-animations#running-demo-app
// todo dark theme
// todo tslint
