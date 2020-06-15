import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";
import PercentChangeCell from "./PercentChangeCell";
import SortDirection from "../../../components/common/SortDirection";
import {sortBy} from 'lodash';

const WatchListTable = ({watchListStocks}) => {
    const [isAscending, setSortDirection] = useState(true);

    const ascendingSort = (watchListStock) => watchListStock.stock.percentChange;

    const descendingSort = (watchListStock) => -watchListStock.stock.percentChange;

    const onChangeSortDirection = (sortDirection) => {
        setSortDirection(sortDirection);
    }

    const comparisonFunction = isAscending ? ascendingSort : descendingSort;
    const sortedWatchListStocks = sortBy(watchListStocks, comparisonFunction);

    return (
        <table className="table table-borderless table-dark table-hover">
            <thead>
            <tr>
                <th>Symbol</th>
                <th className="text-right">Price</th>
                <th className="text-right">Volume</th>
                <th className="text-right">
                    Percent change
                    &nbsp;
                    <SortDirection onChangeSortDirection={onChangeSortDirection}/>
                </th>
            </tr>
            </thead>
            <tbody>
            {sortedWatchListStocks.map((watchListStock) => {
                return (
                    <tr key={watchListStock.stock.symbol}>
                        <td>
                            {watchListStock.stock.symbol}
                        </td>
                        <td className="text-right">
                            <CurrencyFormat value={watchListStock.stock.currentPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            fixedDecimalScale={true}
                                            decimalScale={2}
                                            prefix={'$'}/>
                        </td>
                        <td className="text-right">
                            <NumberFormat value={watchListStock.stock.volume}
                                          displayType={'text'}
                                          thousandSeparator={true}/>
                        </td>
                        <PercentChangeCell percentChange={watchListStock.stock.percentChange}/>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

WatchListTable.propTypes = {
    watchListStocks: PropTypes.arrayOf(PropTypes.shape({
        stock: PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            currentPrice: PropTypes.number,
            volume: PropTypes.number,
            percentChange: PropTypes.number,
        }).isRequired
    })).isRequired
};

export default WatchListTable;
