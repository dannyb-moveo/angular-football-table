import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeaguesService } from 'src/app/leagues.service';

@Component({
  selector: 'app-league-initial',
  templateUrl: './league-initial.component.html',
  styleUrls: ['./league-initial.component.scss'],
})
export class LeagueInitialComponent implements OnInit, OnDestroy {
  isInitial: boolean;
  sub: Subscription;
  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {
    this.sub = this.leaguesService.currentIsInitial.subscribe((initial) => {
      this.isInitial = initial;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
