import { Injectable } from '@angular/core';
import {KPI} from '../../models/kpi.model';

@Injectable({
  providedIn: 'root'
})
export class KPIService {

  KPI: KPI [] = [
    { name: 'Average Rating', rating: '4.33', trend: -2.55 },
    { name: 'Total Reviews', rating: '758', trend: 1.74},
    { name: 'Response Rate', rating: '34.3%', trend: 245.33},
    { name: 'Response Time', rating: '15.53 days', trend: 76.16}
  ];

  constructor() { }
  getKPI() {
    return this.KPI;
  }
}
