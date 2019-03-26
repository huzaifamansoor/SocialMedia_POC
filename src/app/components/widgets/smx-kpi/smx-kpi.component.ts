import { Component, OnInit } from '@angular/core';
import { SMXFeedKPI } from 'src/app/models/smx-feed-kpi.model';
import { SmxDashboardService } from 'src/app/services/SMXDashboard/smx-dashboard.service';

@Component({
  selector: 'app-smx-kpi',
  templateUrl: './smx-kpi.component.html',
  styleUrls: ['./smx-kpi.component.css']
})
export class SmxKpiComponent implements OnInit {

  constructor(private smxDashboardService: SmxDashboardService) { }
  SMXKPI: SMXFeedKPI[];
  ngOnInit() {
    this.smxDashboardService.getKPI().subscribe( (res) => {
      this.SMXKPI = res as SMXFeedKPI[];
    });
  }
}
