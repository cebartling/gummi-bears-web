import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";

function WatchList({watchListStocks}) {
    return (
        <div className="col-4">
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
                {watchListStocks.map((watchListStock) => {
                    return (
                        <tr>
                            <td>{watchListStock.stock.symbol}</td>
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
                            <td className="text-right">
                                {watchListStock.stock.percentChange}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

WatchList.propTypes = {
    watchListStocks: PropTypes.arrayOf(PropTypes.shape({
        stock: PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            currentPriceInCents: PropTypes.number.isRequired,
            volume: PropTypes.number.isRequired,
            percentChange: PropTypes.string.isRequired,
        }).isRequired
    })).isRequired
};

export default WatchList;
