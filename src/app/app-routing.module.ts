import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './_helpers/auth-guard.guard';
import { LeagueTeamsComponent } from './leagues/league-teams/league-teams.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/leagues',
    pathMatch: 'full',
    // canActivate: [AuthGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'leagues',
    component: LeaguesComponent,
    canActivate: [AuthGuardGuard],
    children: [{ path: ':league', component: LeagueTeamsComponent }],
  },
  {
    path: 'map',
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
