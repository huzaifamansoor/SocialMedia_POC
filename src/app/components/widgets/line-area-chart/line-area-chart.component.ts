import { Component, OnInit } from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);

@Component({
  selector: 'app-line-area-chart',
  templateUrl: './line-area-chart.component.html',
  styleUrls: ['./line-area-chart.component.css']
})
export class LineAreaChartComponent implements OnInit {

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
    series: [{
        name: 'Comox Valley Toyota',
        data: [
            [Date.UTC(2018, 0, 1), 100],
            [Date.UTC(2018, 1, 1), 110],
            [Date.UTC(2018, 2, 1), 120],
            [Date.UTC(2018, 3, 1), 141],
            [Date.UTC(2018, 4, 1), 141],
            [Date.UTC(2018, 5, 1), 151],
            [Date.UTC(2018, 6, 1), 200],
            [Date.UTC(2018, 7, 1), 95],
            [Date.UTC(2018, 8, 1), 100],
            [Date.UTC(2018, 9, 1), 152],
            [Date.UTC(2018, 10,1), 160],
            [Date.UTC(2018, 11,1), 185],
        ]
    }, {
        name: 'Performance Toyota',
        data: [
						[Date.UTC(2018, 0, 1), 110],
            [Date.UTC(2018, 1, 1), 170],
            [Date.UTC(2018, 2, 1), 154],
            [Date.UTC(2018, 3, 1), 171],
            [Date.UTC(2018, 4, 1), 181],
            [Date.UTC(2018, 5, 1), 121],
            [Date.UTC(2018, 6, 1), 420],
            [Date.UTC(2018, 7, 1), 93],
            [Date.UTC(2018, 8, 1), 170],
            [Date.UTC(2018, 9, 1), 120],
            [Date.UTC(2018, 10,1), 140],
            [Date.UTC(2018, 11,1), 175],
        ]
    }, {
        name: 'South Pointe Toyota',
        data: [
            [Date.UTC(2018, 0, 1), 95],
            [Date.UTC(2018, 1, 1), 120],
            [Date.UTC(2018, 2, 1), 142],
            [Date.UTC(2018, 3, 1), 123],
            [Date.UTC(2018, 4, 1), 143],
            [Date.UTC(2018, 5, 1), 164],
            [Date.UTC(2018, 6, 1), 154],
            [Date.UTC(2018, 7, 1), 185],
            [Date.UTC(2018, 8, 1), 132],
            [Date.UTC(2018, 9, 1), 167],
            [Date.UTC(2018, 10,1), 126],
            [Date.UTC(2018, 11,1), 195],
        ]
    }]
}
  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
