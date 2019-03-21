import { Component, OnInit } from '@angular/core';
import { TopBottomPerformer } from 'src/app/models/top-bottom-performer.model';
import { TopBottomPerformerService } from 'src/app/services/TopBottomPerformer/top-bottom-performer.service';

@Component({
  selector: 'app-top-bottom-performer',
  templateUrl: './top-bottom-performer.component.html',
  styleUrls: ['./top-bottom-performer.component.css']
})
export class TopBottomPerformerComponent implements OnInit {

  displayedColumns: string[] = ['name', 'rating', 'response_rate'];
  topPerformerdataSource: TopBottomPerformer [] = [];
  bottomPerformerdataSource: TopBottomPerformer [] = [];

  constructor(private topBottomPerformService: TopBottomPerformerService) { }

  ngOnInit() {
   this.topBottomPerformService.getTopPerformer().subscribe((res) => {
     this.topPerformerdataSource = res as TopBottomPerformer[];
   });
   this.topBottomPerformService.getBottomPerformer().subscribe((res) => {
     this.bottomPerformerdataSource = res as TopBottomPerformer[];
   });
  }
}
