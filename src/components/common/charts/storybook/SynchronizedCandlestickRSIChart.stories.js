import React from 'react';
import SynchronizedCandlestickRSIChart from "../SynchronizedCandlestickRSIChart";
import {seriesData, seriesDataLinear} from './SynchronizedCandlestickBarChart.data';

export default {
    title: 'Charts/SynchronizedCandlestickRSIChart',
    component: SynchronizedCandlestickRSIChart,
};


export const defaultComponent = () => {
    return (
        <SynchronizedCandlestickRSIChart title={'Example candlestick and line brush charts'}
                                         seriesData={seriesData}
                                         seriesDataLinear={seriesDataLinear}
                                         candlestickHeight={300}
                                         rsiLineChartHeight={200}/>
    );
}
