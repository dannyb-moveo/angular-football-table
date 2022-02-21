import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(private http: HttpClient) {}

  private isInitial = new BehaviorSubject(true);
  currentIsInitial = this.isInitial.asObservable();

  getData(league: string) {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`;
    return this.http.get<any>(url);
  }

  setIsInitial(mount: boolean) {
    this.isInitial.next(mount);
  }
}
