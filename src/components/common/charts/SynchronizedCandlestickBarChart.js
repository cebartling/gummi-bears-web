import React from 'react';
import ReactApexChart from 'react-apexcharts';


const SynchronizedCandlestickBarChart = ({seriesData, seriesDataLinear, candlestickHeight, barHeight}) => {
    const candlestickSeries = [{
        data: seriesData
    }];
    const barSeries = [{
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
                    upward: '#3C90EB',
                        downward: '#DF7D46'
                }
            }
        },
        xaxis: {
            type: 'datetime'
        }
    };

    const barOptions = {
        chart: {
            height: barHeight,
                type: 'bar',
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
        plotOptions: {
            bar: {
                columnWidth: '80%',
                    colors: {
                    ranges: [{
                        from: -1000,
                        to: 0,
                        color: '#F15B46'
                    }, {
                        from: 1,
                        to: 10000,
                        color: '#FEB019'
                    }],

                },
            }
        },
        stroke: {
            width: 0
        },
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
            <div id="chart-bar">
                <ReactApexChart options={barOptions}
                                series={barSeries}
                                type="bar"
                                height={barHeight}/>
            </div>
        </div>
    );
};


export default SynchronizedCandlestickBarChart;
