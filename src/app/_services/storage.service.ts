import { Injectable } from '@angular/core';
import { Team } from '../_models/team.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  user?: string;
  favoriteTeams?: Team[];

  constructor() {}

  setUser(email: string) {
    sessionStorage.setItem('user', email);
  }

  setFavoriteTeams(teams: Team[]) {
    sessionStorage.setItem('favoriteTeams', JSON.stringify(teams));
  }

  getUser() {
    const user = sessionStorage.getItem('user');
    return user;
  }

  getFavoriteTeams(): Team[] {
    const teams = JSON.parse(sessionStorage.getItem('favoriteTeams')!);
    return teams;
  }
}
