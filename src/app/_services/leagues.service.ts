import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../_models/team.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private isInitial = new BehaviorSubject(true);
  currentIsInitial = this.isInitial.asObservable();
  favoriteTeams: Team[] = this.storageService.getFavoriteTeams() || [];

  getData(league: string) {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`;
    return this.http.get<any>(url);
  }

  setIsInitial(mount: boolean) {
    this.isInitial.next(mount);
  }

  addFavoriteTeam(team: Team) {
    if (this.favoriteTeams.length >= 5) {
      return;
    }
    this.favoriteTeams.push(team);
    this.storageService.setFavoriteTeams(this.favoriteTeams);
  }

  removeFavoriteTeam(index: number) {
    this.favoriteTeams.splice(index, 1);
  }
}
