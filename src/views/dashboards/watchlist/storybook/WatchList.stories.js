import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import WatchList from "../WatchList";

export default {
    title: 'WatchList',
    component: WatchList,
};

const data = [
    {
        watchListStock: {
            symbol: 'GOOGL',
            currentPrice: 124500,
            volume: 7438789,
            percentChange: "-2.34%"
        }
    },
    {
        watchListStock: {
            symbol: 'FB',
            currentPrice: 17517,
            volume: 7438789,
            percentChange: "2.34%"
        }
    },
    {
        watchListStock: {
            symbol: 'MSFT',
            currentPrice: 17517,
            volume: 7438789,
            percentChange: "-9.34%"
        }
    },
    {
        watchListStock: {
            symbol: 'NFLX',
            currentPrice: 17517,
            volume: 7438789,
            percentChange: "12.34%"
        }
    },
];

export const defaultComponent = () => (
    <WatchList watchListStocks={data} />
);

