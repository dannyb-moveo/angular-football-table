import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueListComponent } from './leagues/league-list/league-list.component';
import { LeagueItemComponent } from './leagues/league-list/league-item/league-item.component';
import { LeagueTeamsComponent } from './leagues/league-teams/league-teams.component';
import { LeagueTeamsItemComponent } from './leagues/league-teams/league-teams-item/league-teams-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LeagueInitialComponent } from './leagues/league-initial/league-initial.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    LeagueListComponent,
    LeagueItemComponent,
    LeagueTeamsComponent,
    LeagueTeamsItemComponent,
    LeagueInitialComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
