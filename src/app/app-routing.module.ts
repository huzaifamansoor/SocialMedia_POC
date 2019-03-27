import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardReportComponent } from './components/reports/dashboard-report/dashboard-report.component';
import { ReviewListReportComponent } from './components/reports/review-list-report/review-list-report.component';
import { SmxFeedReportComponent } from './components/reports/smx-feed-report/smx-feed-report.component';
import { SmxSearchReportComponent } from './components/reports/smx-search-report/smx-search-report.component';
import { SocialMediaDashboardReportComponent } from './components/reports/social-media-dashboard-report/social-media-dashboard-report.component';

const routes: Routes = [
  {path: '', component: DashboardReportComponent},
  {path: 'review-list', component: ReviewListReportComponent},
  {path: 'smx-feed', component: SmxFeedReportComponent},
  {path: 'smx-search', component: SmxSearchReportComponent},
  {path: 'social-media-dashboard', component: SocialMediaDashboardReportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
