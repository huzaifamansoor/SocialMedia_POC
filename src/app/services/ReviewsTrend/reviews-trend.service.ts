import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewsTrendService {
  apiURL = environment.apiUrl ;

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(`${this.apiURL}/reviewstrend`);
  }
}
