import React from 'react';
import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";

function StocksListingTableRow({stock}) {

    const renderDirection = (openPrice, closePrice) => {
        if (openPrice === closePrice) return null;
        return (closePrice > openPrice) ?
            (<FontAwesomeIcon icon={faArrowCircleUp}/>) :
            (<FontAwesomeIcon icon={faArrowCircleDown}/>);
    };

    const {id, name, symbol, latestDailyTimeSeriesEvent} = stock;

    return (
        <tr key={id}>
            <td>{name}</td>
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
                {renderDirection(latestDailyTimeSeriesEvent?.openPrice,
                    latestDailyTimeSeriesEvent?.closePrice)}
            </td>
        </tr>
    )
}

export default StocksListingTableRow;
