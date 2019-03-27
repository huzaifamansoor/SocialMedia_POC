import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

// User Defined Modules
import { AngularMaterialModule } from 'src/app/modules/angular-material';

// User Defined Widget Components
import { KpiBarComponent } from '../components/widgets/kpi-bar/kpi-bar.component';
import { HeaderComponent } from '../components/widgets/header/header.component';
import { TopBottomPerformerComponent } from '../components/widgets/top-bottom-performer/top-bottom-performer.component';
import { ReviewsTrendComponent } from '../components/widgets/reviews-trend/reviews-trend.component';
import { TopReviewsComponent } from '../components/widgets/top-reviews/top-reviews.component';
import { SmxFeedComponent } from '../components/widgets/smx-feed/smx-feed.component';
import { SmxFeedKpiComponent } from '../components/widgets/smx-feed-kpi/smx-feed-kpi.component';
import { SmxSearchComponent } from '../components/widgets/smx-search/smx-search.component';
import { SmxKpiComponent } from '../components/widgets/smx-kpi/smx-kpi.component';
import { TopCommentsComponent } from '../components/widgets/top-comments/top-comments.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    KpiBarComponent,
    HeaderComponent,
    TopBottomPerformerComponent,
    ReviewsTrendComponent,
    TopReviewsComponent,
    SmxFeedComponent,
    SmxFeedKpiComponent,
    SmxSearchComponent,
    SmxKpiComponent,
    TopCommentsComponent
  ],
  imports: [
    AngularMaterialModule,
    HighchartsChartModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    KpiBarComponent,
    HeaderComponent,
    TopBottomPerformerComponent,
    ReviewsTrendComponent,
    TopReviewsComponent,
    SmxFeedComponent,
    SmxFeedKpiComponent,
    SmxSearchComponent,
    SmxKpiComponent,
    TopCommentsComponent
  ]
})

export class WidgetModule { }
