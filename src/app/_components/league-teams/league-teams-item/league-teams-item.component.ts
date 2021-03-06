import { Component, Input, OnInit } from '@angular/core';
import { LeaguesService } from 'src/app/_services/leagues.service';
import { Team } from 'src/app/_models/team.model';

@Component({
  selector: 'app-league-teams-item',
  templateUrl: './league-teams-item.component.html',
  styleUrls: ['./league-teams-item.component.scss'],
})
export class LeagueTeamsItemComponent implements OnInit {
  @Input() singleTeam: Team;

  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {}

  add(): void {
    this.leaguesService.addFavoriteTeam(this.singleTeam);
  }
}
