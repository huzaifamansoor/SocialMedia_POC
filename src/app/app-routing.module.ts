import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/reports/dashboard/dashboard.component';
import { ReviewListComponent } from './components/reports/review-list/review-list.component';
import { SmxFeedReportComponent } from './components/reports/smx-feed-report/smx-feed-report.component';
import { SmxSearchReportComponent } from './components/reports/smx-search-report/smx-search-report.component';
import { SmxDashboardService } from './services/SMXDashboard/smx-dashboard.service';
import { SocialMediaDashboardComponent } from './components/reports/social-media-dashboard/social-media-dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'review-list', component: ReviewListComponent},
  {path: 'smx-feed', component: SmxFeedReportComponent},
  {path: 'smx-search', component: SmxSearchReportComponent},
  {path: 'social-media-dashboard', component: SocialMediaDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
