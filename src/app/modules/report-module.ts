import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from '../components/reports/dashboard/dashboard.component';
import { WidgetModule } from 'src/app/modules/widget-module';
import { ReviewListComponent } from '../components/reports/review-list/review-list.component';
import { AngularMaterialModule } from './angular-material';

@NgModule({
  declarations: [
    DashboardComponent,
    ReviewListComponent
  ],
  imports: [
    WidgetModule,
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    DashboardComponent,
    ReviewListComponent
  ]
})
export class ReportModule { }
