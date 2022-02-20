import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(private http: HttpClient) {}

  getData(league: string) {
    let url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`;
    return this.http.get(url);
  }
}
