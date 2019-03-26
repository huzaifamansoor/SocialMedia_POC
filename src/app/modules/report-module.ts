import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from '../components/reports/dashboard/dashboard.component';
import { WidgetModule } from 'src/app/modules/widget-module';
import { ReviewListComponent } from '../components/reports/review-list/review-list.component';
import { SmxFeedReportComponent } from '../components/reports/smx-feed-report/smx-feed-report.component';
import { SmxSearchReportComponent } from '../components/reports/smx-search-report/smx-search-report.component';
import { SocialMediaDashboardComponent } from '../components/reports/social-media-dashboard/social-media-dashboard.component';

import { AngularMaterialModule } from './angular-material';

@NgModule({
  declarations: [
    DashboardComponent,
    ReviewListComponent,
    SmxFeedReportComponent,
    SmxSearchReportComponent,
    SocialMediaDashboardComponent
  ],
  imports: [
    WidgetModule,
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    DashboardComponent,
    ReviewListComponent,
    SmxFeedReportComponent,
    SmxSearchReportComponent,
    SocialMediaDashboardComponent
  ]
})
export class ReportModule { }
