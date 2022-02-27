import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent implements OnInit {
  leagues: string[] = [
    'English Premier League',
    'Italian Serie A',
    'Spanish La Liga',
    'German Bundesliga',
    'French Ligue 1',
  ];

  constructor() {}

  ngOnInit(): void {}
}
