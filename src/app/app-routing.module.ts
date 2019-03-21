import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/reports/dashboard/dashboard.component';
import { ReviewListComponent } from './components/reports/review-list/review-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'review-list', component: ReviewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
