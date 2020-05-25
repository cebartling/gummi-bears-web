import React from 'react';
import ReactApexChart from 'react-apexcharts';

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

export default BasicCandlestickChart;
