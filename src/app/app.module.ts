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
import { RankingComponent } from './pages/ranking/ranking.component';

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
    RacePositionsComponent,
    RankingComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [KartsService, { provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
