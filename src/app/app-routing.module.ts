import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PilotsComponent } from './pages/pilots/pilots.component';
import { RacesComponent } from './pages/races/races.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'races', component: RacesComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'pilot-races', component: PilotsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
