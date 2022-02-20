import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueTeamsComponent } from './leagues/league-teams/league-teams.component';
import { LeaguesComponent } from './leagues/leagues.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/leagues', pathMatch: 'full' },
  {
    path: 'leagues',
    component: LeaguesComponent,
    children: [{ path: ':league', component: LeagueTeamsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
