import React from 'react';
import ReactApexChart from 'react-apexcharts';


const SynchronizedCandlestickRSIChart = ({title, seriesData, seriesDataLinear, candlestickHeight, rsiLineChartHeight}) => {
    const candlestickSeries = [{
        data: seriesData
    }];
    const lineSeries = [{
        name: 'volume',
        data: seriesDataLinear
    }];

    const candlestickOptions = {
        chart: {
            type: 'candlestick',
            height: candlestickHeight,
            id: 'candles',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#2ccd00',
                    downward: '#d20000'
                }
            }
        },
        xaxis: {
            type: 'datetime'
        }
    };

    const rsiLineChartOptions = {
        chart: {
            height: rsiLineChartHeight,
            type: 'line',
            brush: {
                enabled: true,
                target: 'candles'
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date('20 Jan 2017').getTime(),
                    max: new Date('10 Dec 2017').getTime()
                },
                fill: {
                    color: '#ccc',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: title,
            align: 'left'
        },
        stroke: {
            width: [2, 1]
        },
        // tooltip: {
        //     shared: true,
        //     custom: [function ({seriesIndex, dataPointIndex, w}) {
        //         return w.globals.series[seriesIndex][dataPointIndex]
        //     }, function ({seriesIndex, dataPointIndex, w}) {
        //         var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
        //         var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
        //         var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
        //         var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
        //         return (
        //             '<div class="apexcharts-tooltip-candlestick">' +
        //             '<div>Open: <span class="value">' +
        //             o +
        //             '</span></div>' +
        //             '<div>High: <span class="value">' +
        //             h +
        //             '</span></div>' +
        //             '<div>Low: <span class="value">' +
        //             l +
        //             '</span></div>' +
        //             '<div>Close: <span class="value">' +
        //             c +
        //             '</span></div>' +
        //             '</div>'
        //         )
        //     }]
        // },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                offsetX: 13
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };


    return (
        <div class="chart-box">
            <div id="chart-candlestick">
                <ReactApexChart options={candlestickOptions}
                                series={candlestickSeries}
                                type="candlestick"
                                height={candlestickHeight}/>
            </div>
            <div id="chart-line">
                <ReactApexChart options={rsiLineChartOptions}
                                series={lineSeries}
                                type="line"
                                height={rsiLineChartHeight}/>
            </div>
        </div>
    );
};

export default SynchronizedCandlestickRSIChart;
