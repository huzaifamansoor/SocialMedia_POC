import { Component, OnInit } from '@angular/core';
import { TopReviews } from '../../../models/top-reviews.model';
import { TopReviewsService } from 'src/app/services/TopReviews/top-reviews.service';

@Component({
  selector: 'app-top-reviews',
  templateUrl: './top-reviews.component.html',
  styleUrls: ['./top-reviews.component.css']
})
export class TopReviewsComponent implements OnInit {

  constructor(private topReviewsService: TopReviewsService) { }
  items: TopReviews [] = [];

  ngOnInit() {
    this.topReviewsService.get().subscribe((res) => {
      console.log(res);
      this.items = res as  TopReviews [];
    });

  }

}
