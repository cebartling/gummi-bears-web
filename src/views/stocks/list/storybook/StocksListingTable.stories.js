import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import StocksListingTable from "../StocksListingTable";

export default {
    title: 'StocksListingTable',
    component: StocksListingTable,
};

const data = [
    {stock: {name: 'Alphabet', symbol: 'GOOGL', openPrice: 124500, highPrice: 127511, lowPrice: 123402}},
    {stock: {name: 'Facebook', symbol: 'FB', openPrice: 17517, highPrice: 17818, lowPrice: 17283}},
    {stock: {name: 'Microsoft', symbol: 'MSFT', openPrice: 17089, highPrice: 17356, lowPrice: 16924}},
    {stock: {name: 'Netflix', symbol: 'NFLX', openPrice: 41307, highPrice: 43492, lowPrice: 41256}},
];

export const defaultComponent = () => (
    <div className="container mt-3">
        <StocksListingTable userStocks={data}/>
    </div>
);

