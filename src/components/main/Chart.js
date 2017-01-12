import React, { Component } from 'react';
import * as $ from 'jquery';
import Highcharts from 'highcharts';
require('highcharts/modules/drilldown')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/data')(Highcharts);

class Chart extends Component {

  componentDidMount() {
    const options = {
      chart: {
        renderTo: 'chart',
        defaultSeriesType: 'column'
      },
      title: {
        text: 'Динамика продаж'
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
          text: 'Количество продаж'
        }
      },
      series: [],
      drilldown: {
        series: [{
          id: 'nov',
          name: 'Ноябрь',
          data: []
        }]
      }
    };

    let parseDrillCsv = (data, optVal) => {
      let lines = data.split('\n');
      options.xAxis.categories = new Array();
      // Iterate over the lines and add categories or series
      $.each(lines, (lineNo, line) => {
        let items = line.split(';');

        // header line containes categories
        if (lineNo === 0) {
          $.each(items, (itemNo, item) => {
            if (itemNo > 0) options.xAxis.categories.push(item);
          });
        }

        // the rest of the lines contain data with their name in the first 
        // position
        else {
          let series = {
            data: []
          };
          $.each(items, (itemNo, item) => {
            if (itemNo > 0) {
              optVal.push(parseFloat(item));
            }
          });
        }
      });
    };

    let parseCsv = (data, optVal, type) => {
      let lines = data.split('\n');

      // Iterate over the lines and add categories or series
      $.each(lines, (lineNo, line) => {
        let items = line.split(';');
    
        // header line containes categories
        if (lineNo === 0) {
          $.each(items, (itemNo, item) => {
            if (itemNo > 0) options.xAxis.categories.push(item);
          });
        }
       
        // the rest of the lines contain data with their name in the first 
        // position
        else {
          let series = {
            data: []
          };
          $.each(items, (itemNo, item) => {
            if (itemNo === 0) {
              series.name = item;
              series.type = type;
            }
            else {
              if (itemNo === 11) {
                series.data.push({
                  y: parseFloat(item),
                  drilldown: 'nov'
                });
              }
              else series.data.push(parseFloat(item));
            }
          });
          optVal.push(series);
        }
      });
    };
    $.get('../dist/csv/chart.csv', (data) => {
      try {
        parseCsv(data, options.series, 'line');
      }
      catch (err) {
        throw (err.name + ': ' + err.message);
      }
    })
    .then(
      $.get('../dist/csv/drilldown.csv', (data) => {
        try {
          parseDrillCsv(data, options.drilldown.series[0]['data'], 'column');
        }
        catch (err) {
          throw (err.name + ': ' + err.message);
        }
      }))
    .then(() => { let chart = new Highcharts.Chart(options); });
  }

  render() {
    return (
      <section className="chart sec">
        <div className="container" id="chart">
        </div>
      </section>
    );
  }
}

export default Chart;
