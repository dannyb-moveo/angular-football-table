import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './_helpers/auth-guard.guard';
import { LeagueTeamsComponent } from './_components/league-teams/league-teams.component';
import { LeaguesComponent } from './_pages/leagues/leagues.component';
import { LoginComponent } from './_pages/login/login.component';
import { MapComponent } from './_pages/map/map.component';

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
