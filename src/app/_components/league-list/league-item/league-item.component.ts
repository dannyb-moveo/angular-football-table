import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.scss'],
})
export class LeagueItemComponent implements OnInit {
  @Input() league: string = '';

  constructor() {}

  ngOnInit(): void {}
}
