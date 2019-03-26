import { Component, OnInit } from '@angular/core';
import { SMXFeedKPI } from 'src/app/models/smx-feed-kpi.model';
import { SmxFeedService } from 'src/app/services/Feed/smx-feed.service';

@Component({
  selector: 'app-smx-feed-kpi',
  templateUrl: './smx-feed-kpi.component.html',
  styleUrls: ['./smx-feed-kpi.component.css']
})
export class SmxFeedKpiComponent implements OnInit {

  constructor(private smxFeedService: SmxFeedService) { }
  SMXKPI: SMXFeedKPI[];
  ngOnInit() {
    this.smxFeedService.getKPI().subscribe( (res) => {
      this.SMXKPI = res as SMXFeedKPI[];
    });
  }

}
