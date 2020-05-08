import React from 'react';
import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
import {Link} from "react-router-dom";
import StockPriceDirection from "../../../components/common/StockPriceDirection";

const StocksListingTableRow = ({stock, userStockId}) => {

    const {id, name, symbol, latestDailyTimeSeriesEvent} = stock;
    const userStockDetailUrl = `/userStock/${userStockId}`;

    return (
        <tr key={id}>
            <td>
                <Link to={userStockDetailUrl}>{name}</Link>
            </td>
            <td>{symbol}</td>
            <td className="text-right">
                <CurrencyFormat value={latestDailyTimeSeriesEvent?.openPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right">
                <CurrencyFormat value={latestDailyTimeSeriesEvent?.highPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right">
                <CurrencyFormat value={latestDailyTimeSeriesEvent?.lowPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right">
                <CurrencyFormat value={latestDailyTimeSeriesEvent?.closePrice}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right">
                <NumberFormat value={latestDailyTimeSeriesEvent?.volume}
                              displayType={'text'}
                              thousandSeparator={true}/>
            </td>
            <td className="text-center">
                <StockPriceDirection openPrice={latestDailyTimeSeriesEvent?.openPrice}
                                     closePrice={latestDailyTimeSeriesEvent?.closePrice}/>
            </td>
        </tr>
    )
}

export default StocksListingTableRow;
