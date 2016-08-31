'use strict';

/**
 * @ngdoc function
 * @name firstC3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstC3App
 */
angular.module('firstC3App')
.controller('MainCtrl', function ($scope, $timeout) {

  var chart1 = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 50, 100, 70, 120, 90],
        ['data2', 50, 20, 10, 40, 85, 55],
        ['data3', 14, 25, 62, 90, 60, 29],
        ['data4', 90, 76, 85, 30, 20, 10]
      ],
    },
  });

   this.show_info = function() {
    chart1.show(['data2', 'data3']);
  };

  this.hide_info = function() {
    chart1.hide(['data2', 'data3'])
  };

  var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      // iris data from R
      columns: [
          ["Windows", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["Mac", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ["Linux", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
      ],
      type : 'pie',
    }
  });

  var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
      // iris data from R
      columns: [
          ['data1', 43.4],
          ['data2', 70.8],
      ],
      type : 'pie',
    }
  });

  var change_chart = function(){
    chart3.load({
      columns: [
          ["data3", 8.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["data4", 1.0, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ["data5", 0.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
      ]
    });
    $timeout(change_chart2, 4000);
  }

  var change_chart2 = function(){
    chart3.unload({
      ids: ['data5', 'data3']
    });
    $timeout(change_chart, 4000);
  }

  $timeout(change_chart, 3000);

  var chart4 = c3.generate({
    bindto: '#chart4',
    data: {
      columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250]
      ],
      type: 'bar',
      colors: {
          data1: 'black',
          data2: 'orange',
          data3: '#0000ff'
      },
      labels: true
    },
    zoom: {
        enabled: true
    }
  });

    var chart5 = c3.generate({
      bindto: '#chart5',
      data: {
        columns: [
            ['data1', 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 1.4, 3.7, 3.6, 3.3],
            ['data2', 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 1.3, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 3.2, 2.5, 3.2, 2.8, 0.5, 2.8]
        ],
        type: 'donut'
      }
    });

    var chn1 = function(){
      chart5.transform('area-spline');
      $timeout(chn2, 3000);
    }

    var chn2 = function(){
      chart5.transform('bar');
      $timeout(chn3, 3000);
    }

    var chn3 = function(){
      chart5.transform('scatter');
      $timeout(chn4, 3000);
    }

    var chn4 = function(){
      chart5.transform('donut');
      $timeout(chn1, 3000);
    }

    $timeout(chn1, 3000);

    var chart6 = c3.generate({
      bindto: '#chart6',
      data: {
        url: 'data/c3_test.csv',
        type: 'bar',
        types: {
          data2: 'bar',
          data3: 'area',
        },
        groups: [
          ['data1', 'data2']
        ]
      }
    });

  });
