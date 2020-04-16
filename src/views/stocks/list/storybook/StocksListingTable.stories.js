import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import StocksListingTable from "../StocksListingTable";

export default {
    title: 'StocksListingTable',
    component: StocksListingTable,
};

const data = [
    {companyName: 'Alphabet', stockSymbol: 'GOOGL', openPrice: 124500, highPrice: 127511, lowPrice: 123402},
    {companyName: 'Facebook', stockSymbol: 'FB', openPrice: 17517, highPrice: 17818, lowPrice: 17283},
    {companyName: 'Microsoft', stockSymbol: 'MSFT', openPrice: 17089, highPrice: 17356, lowPrice: 16924},
    {companyName: 'Netflix', stockSymbol: 'NFLX', openPrice: 41307, highPrice: 43492, lowPrice: 41256},
];

export const defaultTable = () => (
    <div className="container mt-3">
        <h2>Stocks Listing Table</h2>
        <StocksListingTable data={data}/>
    </div>
);

