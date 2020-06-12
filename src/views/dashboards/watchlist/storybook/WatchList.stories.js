import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import WatchList from "../WatchList";
import client from "../../../../stories/storybookApolloClient";
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";
import store from "../../../../redux/store";

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

const addWatch = (symbolAndCompanyName) => {
    console.log('addWatch', symbolAndCompanyName);
};


export const defaultComponent = () => (


    <div className="row">
        <ApolloProvider client={client}>
            <Provider store={store}>
                <WatchList watchListStocks={data}/>
            </Provider>
        </ApolloProvider>
    </div>
);

