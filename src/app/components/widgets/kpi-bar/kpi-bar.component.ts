import { Component, OnInit } from '@angular/core';
import { KPIService } from 'src/app/services/KPI/kpi.service';
import { KPI } from 'src/app/models/kpi.model';

@Component({
  selector: 'app-kpi-bar',
  templateUrl: './kpi-bar.component.html',
  styleUrls: ['./kpi-bar.component.css']
})
export class KpiBarComponent implements OnInit {

  isLoading = false;
  KPI: KPI [] = [];

  constructor(private kpiService: KPIService) { }

  ngOnInit() {
    this.isLoading = true;
    this.KPI = this.kpiService.getKPI();
    this.isLoading = false;
    console.log(this.KPI);
  }

}
