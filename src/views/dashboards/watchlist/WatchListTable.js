import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";
import PercentChangeCell from "./PercentChangeCell";
import SortDirection from "../../../components/common/SortDirection";

const WatchListTable = ({watchListStocks}) => {
    const [isAscending, setSortDirection] = useState(true);

    const ascendingSort = (watchListStock1, watchListStock2) => {
       return watchListStock1.stock.percentChange - watchListStock2.stock.percentChange
    };

    const descendingSort = (watchListStock1, watchListStock2) => {
        return watchListStock2.stock.percentChange - watchListStock1.stock.percentChange
    };

    const onChangeSortDirection = (sortDirection) => {
        console.log(`onChangeSortDirection: ${sortDirection}`);
        setSortDirection(sortDirection);
    }

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
            {watchListStocks.sort(isAscending ? ascendingSort : descendingSort).map((watchListStock) => {
                return (
                    <tr key={watchListStock.stock.symbol}>
                        <td>
                            {watchListStock.stock.symbol}
                        </td>
                        <td className="text-right">
                            <CurrencyFormat value={watchListStock.stock.currentPriceInCents / 100}
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
            currentPriceInCents: PropTypes.number.isRequired,
            volume: PropTypes.number.isRequired,
            percentChange: PropTypes.number.isRequired,
        }).isRequired
    })).isRequired
};

export default WatchListTable;
