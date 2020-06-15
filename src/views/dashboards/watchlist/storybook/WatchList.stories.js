import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import WatchList from "../WatchList";
import client from "../../../../stories/storybookApolloClient";
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";
import store from "../../../../redux/store";
import {v4 as uuidv4} from 'uuid';

export default {
    title: 'WatchList',
    component: WatchList,
};

const watchListStocks = [
    {
        id: uuidv4(),
        stock: {
            id: uuidv4(),
            name: 'Microsoft Inc.',
            symbol: 'MSFT',
            currentPrice: 183.54,
            openPrice: 182.45,
            highPrice: 184.66,
            lowPrice: 182.30,
            previousClosePrice: 181.99,
            volume: 34827848,
            percentChange: 1.23,
            priceChange: 1.45,
            latestTradingDate: '2020-06-14'
        }
    }
];

export const defaultComponent = () => (
    <div className="row">
        <ApolloProvider client={client}>
            <Provider store={store}>
                <WatchList watchListStocks={watchListStocks}/>
            </Provider>
        </ApolloProvider>
    </div>
);

