import { Component, OnInit } from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
import { ReviewsTrendService } from 'src/app/services/ReviewsTrend/reviews-trend.service';
import { ReviewList } from 'src/app/models/review-list.model';

More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);

@Component({
  selector: 'app-reviews-trend',
  templateUrl: './reviews-trend.component.html',
  styleUrls: ['./reviews-trend.component.css']
})
export class ReviewsTrendComponent implements OnInit {

  constructor(private reviewsTrendService: ReviewsTrendService) { }
  Highcharts = Highcharts;
  chartConstructor = 'chart';
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;
  chartOptions = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Reviews Over Time'
    },
    credits: {
      enabled: false
  },
    /* subtitle: {
        text: 'Irregular time data in Highcharts JS'
    }, */
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Reviews'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y}'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: []
  };
  chartCallback = (chart) => {};


  ngOnInit() {
    this.reviewsTrendService.get().subscribe((res) => {
      this.chartOptions.series = res as ReviewList[];
      this.updateFlag = true;
    });
  }

}
