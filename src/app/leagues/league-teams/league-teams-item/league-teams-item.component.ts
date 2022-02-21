import { Component, Input, OnInit } from '@angular/core';

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
