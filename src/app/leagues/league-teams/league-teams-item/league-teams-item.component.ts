import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LeaguesService } from 'src/app/leagues.service';

@Component({
  selector: 'app-league-teams-item',
  templateUrl: './league-teams-item.component.html',
  styleUrls: ['./league-teams-item.component.scss'],
})
export class LeagueTeamsItemComponent implements OnInit {
  @Input() singleTeam: any;

  constructor() {}

  ngOnInit(): void {}
}
