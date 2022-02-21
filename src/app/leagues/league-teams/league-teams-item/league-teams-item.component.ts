import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/team.model';

@Component({
  selector: 'app-league-teams-item',
  templateUrl: './league-teams-item.component.html',
  styleUrls: ['./league-teams-item.component.scss'],
})
export class LeagueTeamsItemComponent implements OnInit {
  @Input() singleTeam: Team;

  constructor() {}

  ngOnInit(): void {}
}
