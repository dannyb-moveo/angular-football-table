import { Component, OnInit } from '@angular/core';
import { LeaguesService } from './leagues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-football-tables';
  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {
    // this.leaguesService.getData().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
