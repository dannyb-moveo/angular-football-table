import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LeaguesService } from 'src/app/leagues.service';
import { Team } from 'src/app/team.model';
@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.scss'],
})
export class LeagueTeamsComponent implements OnInit {
  teams: Team[] = [];
  league: string = '';

  constructor(
    private leagueService: LeaguesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.league = params['league'];
      this.leagueService.getData(this.league).subscribe((response) => {
        this.teams = response.teams;
      });
      this.leagueService.setIsInitial(false);
    });
  }
}
