import { Component, OnInit, ViewChild } from '@angular/core';
import { SMXFeed } from 'src/app/models/smx-feed.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { SmxFeedService } from 'src/app/services/Feed/smx-feed.service';

@Component({
  selector: 'app-smx-feed',
  templateUrl: './smx-feed.component.html',
  styleUrls: ['./smx-feed.component.css']
})
export class SmxFeedComponent implements OnInit {

  SMXFeed: SMXFeed [];

dataSource: any;
displayedColumns: string[] = ['network', 'seedName', 'feed', 'date'];
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private smxFeedService: SmxFeedService) { }

  ngOnInit() {
    this.smxFeedService.getFeed().subscribe( (res) => {
      console.log(res);
      this.SMXFeed = res as SMXFeed[];
      this.dataSource = new MatTableDataSource(this.SMXFeed);
      this.dataSource.paginator = this.paginator;
    });
  }
}
