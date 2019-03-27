import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardReportComponent } from '../components/reports/dashboard-report/dashboard-report.component';
import { WidgetModule } from 'src/app/modules/widget-module';
import { ReviewListReportComponent } from '../components/reports/review-list-report/review-list-report.component';
import { SmxFeedReportComponent } from '../components/reports/smx-feed-report/smx-feed-report.component';
import { SmxSearchReportComponent } from '../components/reports/smx-search-report/smx-search-report.component';
import { SocialMediaDashboardReportComponent } from '../components/reports/social-media-dashboard-report/social-media-dashboard-report.component';

import { AngularMaterialModule } from './angular-material';

@NgModule({
  declarations: [
    DashboardReportComponent,
    ReviewListReportComponent,
    SmxFeedReportComponent,
    SmxSearchReportComponent,
    SocialMediaDashboardReportComponent
  ],
  imports: [
    WidgetModule,
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    DashboardReportComponent,
    ReviewListReportComponent,
    SmxFeedReportComponent,
    SmxSearchReportComponent,
    SocialMediaDashboardReportComponent
  ]
})
export class ReportModule { }
