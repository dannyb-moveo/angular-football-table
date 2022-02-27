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
import { LeagueFavoriteTeamsComponent } from './leagues/league-favorite-teams/league-favorite-teams.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    LeagueListComponent,
    LeagueItemComponent,
    LeagueTeamsComponent,
    LeagueTeamsItemComponent,
    LeagueInitialComponent,
    LeagueFavoriteTeamsComponent,
    LoginComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
