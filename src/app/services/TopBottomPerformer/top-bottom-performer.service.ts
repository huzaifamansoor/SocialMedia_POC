import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TopBottomPerformerService {
  apiURL = environment.apiUrl ;
  constructor(private http: HttpClient) { }

  getTopPerformer() {
    return this.http.get(`${this.apiURL}/topbottomperformer/top`);
  }

  getBottomPerformer() {
    return this.http.get(`${this.apiURL}/topbottomperformer/bottom`);
  }
}
