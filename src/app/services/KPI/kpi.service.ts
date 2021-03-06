import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class KPIService {
  apiURL = environment.apiUrl ;
  constructor(private http: HttpClient) { }
  getKPI() {
    return this.http.get(`${this.apiURL}/kpi`);
  }
}
