import React from 'react';
import { BarStackChart } from 'react-d3-basic';
// import generalChartData from './age.csv';

class BarStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const generalChartData = require('dsv-loader?delimiter=,!./age.csv');
    let width = 700,
      height = 400,
      chartSeries = [
        {
          field: 'Under 5 Years',
          name: 'Under 5 Years'
        },
        {
          field: '5 to 13 Years',
          name: '5 to 13 Years'
        },
        {
          field: '14 to 17 Years',
          name: '14 to 17 Years'
        },
        {
          field: '18 to 24 Years',
          name: '18 to 24 Years'
        },
        {
          field: '25 to 44 Years',
          name: '25 to 44 Years'
        },
        {
          field: '45 to 64 Years',
          name: '45 to 64 Years'
        },
        {
          field: '65 Years and Over',
          name: '65 Years and Over'
        }

      ],
      x = function (d) {
        return d.State;
      },
      xScale = 'ordinal',
      yTickFormat = d3.format('.2s');

    return (
      <BarStackChart
        data={generalChartData}
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
