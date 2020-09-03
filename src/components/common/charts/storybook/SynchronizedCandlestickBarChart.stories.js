import React from 'react';
import SynchronizedCandlestickBarChart from "../SynchronizedCandlestickBarChart";
import {seriesData, seriesDataLinear} from './SynchronizedCandlestickBarChart.data';

export default {
    title: 'Charts/SynchronizedCandlestickBarChart',
    component: SynchronizedCandlestickBarChart,
};


export const defaultComponent = () => {
    return (
        <SynchronizedCandlestickBarChart seriesData={seriesData}
                                         seriesDataLinear={seriesDataLinear}
                                         candlestickHeight={300}
                                         barHeight={200}/>
    );
}
