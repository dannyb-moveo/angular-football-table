import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LeaguesService } from 'src/app/leagues.service';

@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.scss'],
})
export class LeagueTeamsComponent implements OnInit {
  teams = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  teamsObj: any;
  league: string = '';

  constructor(
    private leagueService: LeaguesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.league = params['league'];
      this.leagueService.getData(this.league).subscribe((data) => {
        this.teamsObj = data;
        this.teamsObj = this.teamsObj.teams;
        console.log(this.teamsObj);
      });
    });
  }
}
