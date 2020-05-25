import React from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const BasicCandlestickChart = ({series, title, height}) => {

    const options = {
        chart: {
            type: 'candlestick',
            height: height
        },
        title: {
            text: title,
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <div id="chart">
            <ReactApexChart options={options}
                            series={series}
                            type="candlestick"
                            height={height}/>
        </div>
    );
};

BasicCandlestickChart.propTypes = {
    series: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired
};

export default BasicCandlestickChart;
