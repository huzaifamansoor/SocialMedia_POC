import { NgModule } from '@angular/core';
// Maerial Module
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})

export class AngularMaterialModule {}
