import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from "react-currency-format";

function WatchList({watchListStocks}) {
    return (
        <table className="table table-borderless table-dark table-hover">
            <thead>
            <tr>
                <th>Symbol</th>
                <th className="text-right">Price</th>
                <th className="text-right">Volume</th>
                <th className="text-right">Percent change</th>
            </tr>
            </thead>
            <tbody>
            {watchListStocks.map((it) => {
                return (
                    <tr>
                        <td>{it.watchListStock.symbol}</td>
                        <td className="text-right">
                            <CurrencyFormat value={it.watchListStock.currentPrice / 100}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            fixedDecimalScale={true}
                                            decimalScale={2}
                                            prefix={'$'}/>
                        </td>
                        <td className="text-right">
                            {it.watchListStock.volume}
                        </td>
                        <td className="text-right">
                            {it.watchListStock.percentChange}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

WatchList.propTypes = {
    watchListStocks: PropTypes.arrayOf(PropTypes.shape({
        watchListStock: PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            currentPrice: PropTypes.number.isRequired,
            volume: PropTypes.number.isRequired,
            percentChange: PropTypes.string.isRequired,
        }).isRequired
    })).isRequired
};

export default WatchList;
