import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { LeaguesService } from 'src/app/_services/leagues.service';

@Component({
  selector: 'app-league-favorite-teams',
  templateUrl: './league-favorite-teams.component.html',
  styleUrls: ['./league-favorite-teams.component.scss'],
})
export class LeagueFavoriteTeamsComponent implements OnInit {
  faTrash = faTrash;
  constructor(public leaguesService: LeaguesService) {}

  ngOnInit(): void {}

  removeTeam(index: number) {
    this.leaguesService.removeFavoriteTeam(index);
  }
}
