import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  isInitial: boolean;
  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {
    this.leaguesService.setIsInitial(true);
  }
}
