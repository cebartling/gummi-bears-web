import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import StocksListingTable from "../StocksListingTable";

export default {
    title: 'StocksListingTable',
    component: StocksListingTable,
};

const data = [
    {
        stock: {
            name: 'Alphabet',
            symbol: 'GOOGL',
            latestDailyTimeSeriesEvent: {openPrice: 1245.0, highPrice: 1275.11, lowPrice: 1234.02, closePrice: 1261.69}
        }
    },
    {
        stock: {
            name: 'Facebook',
            symbol: 'FB',
            latestDailyTimeSeriesEvent: {openPrice: 175.17, highPrice: 178.18, lowPrice: 172.83, closePrice: 176.25}
        }
    },
    {
        stock: {
            name: 'Microsoft',
            symbol: 'MSFT',
            latestDailyTimeSeriesEvent: {openPrice: 170.89, highPrice: 173.56, lowPrice: 169.24, closePrice: 172.55}
        }
    },
    {
        stock: {
            name: 'Netflix',
            symbol: 'NFLX',
            latestDailyTimeSeriesEvent: {openPrice: 413.07, highPrice: 434.92, lowPrice: 412.56, closePrice: 420.3}
        }
    },
];

export const defaultComponent = () => (
    <div className="container mt-3">
        <StocksListingTable userStocks={data}/>
    </div>
);

