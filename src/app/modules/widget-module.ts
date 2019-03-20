import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

// User Defined Modules
import { AngularMaterialModule } from 'src/app/modules/angular-material';

// User Defined Widget Components
import { KpiBarComponent } from '../components/widgets/kpi-bar/kpi-bar.component';
import { HeaderComponent } from '../components/widgets/header/header.component';
import { TopBottomPerformerComponent } from '../components/widgets/top-bottom-performer/top-bottom-performer.component';
import { LineAreaChartComponent } from '../components/widgets/line-area-chart/line-area-chart.component';

@NgModule({
  declarations: [
    KpiBarComponent,
    HeaderComponent,
    TopBottomPerformerComponent,
    LineAreaChartComponent
  ],
  imports: [
    AngularMaterialModule,
    HighchartsChartModule,
    CommonModule
  ],
  exports: [
    KpiBarComponent,
    HeaderComponent,
    TopBottomPerformerComponent,
    LineAreaChartComponent
  ]
})

export class WidgetModule { }
