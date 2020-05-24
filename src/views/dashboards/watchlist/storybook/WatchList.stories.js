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
        stock: {
            symbol: 'GOOGL',
            currentPriceInCents: 124500,
            volume: 7438789,
            percentChange: -2.34
        }
    },
    {
        stock: {
            symbol: 'FB',
            currentPriceInCents: 17517,
            volume: 7438789,
            percentChange: 2.34
        }
    },
    {
        stock: {
            symbol: 'MSFT',
            currentPriceInCents: 17517,
            volume: 7438789,
            percentChange: -9.34
        }
    },
    {
        stock: {
            symbol: 'NFLX',
            currentPriceInCents: 17517,
            volume: 7438789,
            percentChange: 12.34
        }
    },
];

export const defaultComponent = () => (
    <div className="row">
        <WatchList watchListStocks={data} />
    </div>
);

