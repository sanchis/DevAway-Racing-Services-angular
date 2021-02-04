import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { KartsService } from './services/karts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
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
