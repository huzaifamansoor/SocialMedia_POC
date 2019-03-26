import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { SMXSearch } from 'src/app/models/smx-search.model';
import { SmxSearchService } from 'src/app/services/Search/smx-search.service';

@Component({
  selector: 'app-smx-search',
  templateUrl: './smx-search.component.html',
  styleUrls: ['./smx-search.component.css']
})
export class SmxSearchComponent implements OnInit {

  constructor(private smxSearchService: SmxSearchService) { }
  SMXFeed: SMXSearch [];

  dataSource: any;
  displayedColumns: string[] = ['network', 'keywordName', 'feed', 'date'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.smxSearchService.getFeed().subscribe( (res) => {
      console.log(res);
      this.SMXFeed = res as SMXSearch[];
      this.dataSource = new MatTableDataSource(this.SMXFeed);
      this.dataSource.paginator = this.paginator;
    });
  }

}
