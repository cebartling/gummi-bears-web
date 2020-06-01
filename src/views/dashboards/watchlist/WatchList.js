import React from 'react';
import {useDispatch} from "react-redux";
import WatchListTable from './WatchListTable';
import WatchListToolbar from './WatchListToolbar';
import {createActionCreateWatchlistStock} from "../../../redux/actions";
import './WatchList.scss';

const watchListStocks = [
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

const WatchList = () => {
    const dispatch = useDispatch();

    const addWatch = (symbolAndCompanyName) => {
        const stock = {symbol: symbolAndCompanyName.symbol, companyName: symbolAndCompanyName.name};
        dispatch(createActionCreateWatchlistStock(stock));
    };

    return (
        <div className="col-5 dark-background-color">
            <div>
                <WatchListToolbar addWatch={addWatch} />
            </div>
            <div>
               <WatchListTable watchListStocks={watchListStocks}/>
            </div>
        </div>
    );
}

export default WatchList;
