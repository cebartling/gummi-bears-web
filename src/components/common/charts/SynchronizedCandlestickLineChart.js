import React from 'react';
import ReactApexChart from 'react-apexcharts';


const SynchronizedCandlestickLineChart = ({lineDataSeries, candlestickDataSeries, chartHeight, title}) => {

    const series = [
        {
            name: 'line',
            type: 'line',
            data: lineDataSeries
        },
        {
            name: 'candle',
            type: 'candlestick',
            data: candlestickDataSeries
        }
    ];

    const options = {
        chart: {
            height: chartHeight,
            type: 'line',
        },
        title: {
            text: title,
            align: 'left'
        },
        stroke: {
            width: [3, 1]
        },
        tooltip: {
            shared: true,
            custom: [function ({seriesIndex, dataPointIndex, w}) {
                return w.globals.series[seriesIndex][dataPointIndex]
            }, function ({seriesIndex, dataPointIndex, w}) {
                var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
                var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
                var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
                var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
                return (
                    '<div class="apexcharts-tooltip-candlestick">' +
                    '<div>Open: <span class="value">' +
                    o +
                    '</span></div>' +
                    '<div>High: <span class="value">' +
                    h +
                    '</span></div>' +
                    '<div>Low: <span class="value">' +
                    l +
                    '</span></div>' +
                    '<div>Close: <span class="value">' +
                    c +
                    '</span></div>' +
                    '</div>'
                )
            }]
        },
        xaxis: {
            type: 'datetime'
        }
    };


    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options}
                                series={series}
                                type="line"
                                height={chartHeight}/>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};


export default SynchronizedCandlestickLineChart;
