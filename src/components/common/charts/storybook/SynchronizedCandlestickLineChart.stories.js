import React from 'react';
import SynchronizedCandlestickLineChart from "../SynchronizedCandlestickLineChart";
import {lineDataSeries, candlestickDataSeries} from './SynchronizedCandlestickLineChart.data';

export default {
    title: 'SynchronizedCandlestickLineChart',
    component: SynchronizedCandlestickLineChart,
};


export const defaultComponent = () => {
    return (
        <SynchronizedCandlestickLineChart lineDataSeries={lineDataSeries}
                                          candlestickDataSeries={candlestickDataSeries}
                                          chartHeight={400}
                                          title={'Example synchronized candlestick and line chart'}/>
    );
}
