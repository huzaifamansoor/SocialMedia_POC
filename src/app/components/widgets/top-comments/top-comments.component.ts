import { Component, OnInit } from '@angular/core';
import { TopReviewsService } from 'src/app/services/TopReviews/top-reviews.service';
import { TopReviews } from '../../../models/top-reviews.model';
@Component({
  selector: 'app-top-comments',
  templateUrl: './top-comments.component.html',
  styleUrls: ['./top-comments.component.css']
})
export class TopCommentsComponent implements OnInit {

  constructor(private topReviewsService: TopReviewsService) { }
  items: TopReviews [] = [];

  ngOnInit() {
    this.topReviewsService.get().subscribe((res) => {
      console.log(res);
      this.items = res as  TopReviews [];
    });
  }

}
