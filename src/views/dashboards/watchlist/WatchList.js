import React from 'react';
import PropTypes from 'prop-types';
import WatchListTable from './WatchListTable';
import WatchListToolbar from './WatchListToolbar';
import './WatchList.scss';

const WatchList = ({watchListStocks}) => {

    return (
        <div className="col-5 dark-background-color">
            <div>
                <WatchListToolbar />
            </div>
            <div>
               <WatchListTable watchListStocks={watchListStocks}/>
            </div>
        </div>
    );
}

WatchList.propTypes = {
    watchListStocks: PropTypes.arrayOf(PropTypes.shape({
        stock: PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            currentPriceInCents: PropTypes.number.isRequired,
            volume: PropTypes.number.isRequired,
            percentChange: PropTypes.number.isRequired,
        }).isRequired
    })).isRequired
};

export default WatchList;
