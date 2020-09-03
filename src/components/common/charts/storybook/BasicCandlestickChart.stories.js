import React from 'react';
import BasicCandlestickChart from '../BasicCandlestickChart';
import {series} from './BasicCandlestickChart.data';

export default {
    title: 'Charts/BasicCandlestickChart',
    component: BasicCandlestickChart,
};



export const defaultComponent = () => {
    return (
        <BasicCandlestickChart series={series} title={'Default Candlestick Chart'} height={500}/>
    );
}
