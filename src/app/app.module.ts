import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeaguesComponent } from './_pages/leagues/leagues.component';
import { LeagueListComponent } from './_components/league-list/league-list.component';
import { LeagueItemComponent } from './_components/league-list/league-item/league-item.component';
import { LeagueTeamsComponent } from './_components/league-teams/league-teams.component';
import { LeagueTeamsItemComponent } from './_components/league-teams/league-teams-item/league-teams-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LeagueInitialComponent } from './_components/league-initial/league-initial.component';
import { LeagueFavoriteTeamsComponent } from './_components/league-favorite-teams/league-favorite-teams.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './_pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './_pages/map/map.component';
import { HeaderComponent } from './_components/header/header.component';

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
    HeaderComponent,
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
