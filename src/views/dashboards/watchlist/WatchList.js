import React from 'react';
import {useDispatch} from "react-redux";
import WatchListTable from './WatchListTable';
import WatchListToolbar from './WatchListToolbar';
import {createActionCreateWatchlistStock} from "../../../redux/actions";
import './WatchList.scss';

const WatchList = ({watchListStocks}) => {
    const dispatch = useDispatch();

    const addWatch = (symbolAndCompanyName) => {
        const stock = {symbol: symbolAndCompanyName.symbol, companyName: symbolAndCompanyName.name};
        dispatch(createActionCreateWatchlistStock(stock));
    };

    return (
        <div className="col-5 dark-background-color" data-testid="watch-list-component">
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
