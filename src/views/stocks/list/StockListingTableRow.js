import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
import {Link} from "react-router-dom";
import StockPriceDirection from "../../../components/common/StockPriceDirection";

const StocksListingTableRow = ({stock, userStockId}) => {

  const {id, name, symbol, latestDailyTimeSeriesEvent} = stock;
  const userStockDetailUrl = `/userStock/${userStockId}`;

  return (
    <tr key={id} className="stock-table-row">
      <td className="stock-table-cell-name">
        <Link to={userStockDetailUrl}>{name}</Link>
      </td>
      <td className="stock-table-cell-symbol">{symbol}</td>
      <td className="text-right stock-table-cell-open-price">
        <CurrencyFormat value={latestDailyTimeSeriesEvent?.openPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        prefix={'$'}/>
      </td>
      <td className="text-right stock-table-cell-high-price">
        <CurrencyFormat value={latestDailyTimeSeriesEvent?.highPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        prefix={'$'}/>
      </td>
      <td className="text-right stock-table-cell-low-price">
        <CurrencyFormat value={latestDailyTimeSeriesEvent?.lowPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        prefix={'$'}/>
      </td>
      <td className="text-right stock-table-cell-close-price">
        <CurrencyFormat value={latestDailyTimeSeriesEvent?.closePrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        prefix={'$'}/>
      </td>
      <td className="text-right stock-table-cell-volume">
        <NumberFormat value={latestDailyTimeSeriesEvent?.volume}
                      displayType={'text'}
                      thousandSeparator={true}/>
      </td>
      <td className="text-center stock-table-cell-price-direction">
        <StockPriceDirection openPrice={latestDailyTimeSeriesEvent?.openPrice}
                             closePrice={latestDailyTimeSeriesEvent?.closePrice}/>
      </td>
    </tr>
  )
}

StocksListingTableRow.propTypes = {
  stock: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    latestDailyTimeSeriesEvent: PropTypes.shape({
      openPrice: PropTypes.number.isRequired,
      closePrice: PropTypes.number.isRequired,
      highPrice: PropTypes.number.isRequired,
      lowPrice: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired,
  userStockId: PropTypes.string.isRequired
};

export default StocksListingTableRow;
