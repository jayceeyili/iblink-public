import React from 'react';
import { BarStackChart } from 'react-d3-basic';
// import generalChartData from './age.csv';

class BarStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activityData = [
      {
        notes: '10',
        bookmarks: '13',
        slide: '1'
      }, {
        notes: '0',
        bookmarks: '2',
        slide: '2'
      }, {
        notes: '5',
        bookmarks: '6',
        slide: '3'
      }, {
        notes: '12',
        bookmarks: '0',
        slide: '4'
      }, {
        notes: '7',
        bookmarks: '2',
        slide: '5'
      }
    ];
    activityData.columns = [
      'slide', 'notes', 'bookmarks'
    ];
    console.log('Activity data:', this.props.activeData);

    let width = 700,
      height = 400,
      chartSeries = [
        {
          field: 'notes',
          name: 'Notes'
        },
        {
          field: 'bookmarks',
          name: 'Bookmarks'
        }
      ],
      x = function (d) {
        return d.slide;
      },
      xScale = 'ordinal',
      yTickFormat = d3.format('.2s');


    // const max = d3.max(data, d => d.value);
    // chart.selectAll('rect').filter(d => d.value === max).classed('max', true).attr('fill', 'green');
      // example of doing a different display for a specific column


    return (
      <BarStackChart
        data={this.props.activeData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
        xScale={xScale}
        yTickFormat={yTickFormat}
      />
    );
  }
}

export default BarStack;
