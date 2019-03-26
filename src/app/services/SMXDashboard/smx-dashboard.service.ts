import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmxDashboardService {

  apiURL = environment.apiUrl ;
  constructor(private http: HttpClient) { }
  getKPI() {
    return this.http.get(`${this.apiURL}/smxdashboard/kpi`);
  }
}
