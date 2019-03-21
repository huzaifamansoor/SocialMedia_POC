import { Component, OnInit, ViewChild } from '@angular/core';
import { ReviewList } from '../../../models/review-list.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ReviewListService } from 'src/app/services/ReviewList/review-list.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})

export class ReviewListComponent implements OnInit {

  constructor(private reviewListService: ReviewListService) { }
  displayedColumns: string[] = ['date', 'location', 'rating', 'source', 'summary'];
  reviewlistdataSource: ReviewList[] = [];
  dataSource: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reviewListService.get().subscribe((res) => {
      this.reviewlistdataSource = res as ReviewList [];
      this.dataSource = new MatTableDataSource(this.reviewlistdataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

}
