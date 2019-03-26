import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmxFeedService {

  apiURL = environment.apiUrl ;
  constructor(private http: HttpClient) { }

  getKPI() {
    return this.http.get(`${this.apiURL}/smxfeed/kpi`);
  }

  getFeed() {
    return this.http.get(`${this.apiURL}/smxfeed/feed`);
  }
}
