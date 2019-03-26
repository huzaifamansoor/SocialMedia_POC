import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmxSearchService {

  apiURL = environment.apiUrl ;
  constructor(private http: HttpClient) { }

  getFeed() {
    return this.http.get(`${this.apiURL}/smxsearch/feed`);
  }
}
