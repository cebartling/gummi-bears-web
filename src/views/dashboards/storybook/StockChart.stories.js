import React from 'react';
import '../../../scss/custom.scss';
import '../../../scss/animations.scss';

import {Chart} from 'react-financial-charts';

export default {
    title: 'StockChart',
    component: Chart,
};


export const defaultComponent = () => (
    <Chart />
);

