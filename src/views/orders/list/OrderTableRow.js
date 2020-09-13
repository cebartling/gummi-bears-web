import React from 'react';
import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
import Moment from "react-moment";
import PropTypes from "prop-types";

const OrderTableRow = ({order}) => {

    return (
        <tr key={order.id} data-order-id={order.id}>
            <td className="text-left orders-table-transaction-type">
                {order?.transactionType}
            </td>
            <td className="text-left orders-table-transaction-timestamp">
                <Moment format="MMMM D, YYYY [at] h:mm A"
                        date={order?.orderTimestamp}/>
            </td>
            <td className="text-right orders-table-transaction-price">
                <CurrencyFormat value={order?.priceInCents / 100}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right orders-table-transaction-shares">
                <NumberFormat value={order?.sharesCount}
                              displayType={'text'}
                              thousandSeparator={true}/>
            </td>
            <td className="text-right orders-table-transaction-total-amount">
                <CurrencyFormat value={order?.totalAmountInCents / 100}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
        </tr>
    )
}

OrderTableRow.propTypes = {
  order: PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionType: PropTypes.string.isRequired,
      orderTimestamp: PropTypes.string.isRequired,
      priceInCents: PropTypes.number.isRequired,
      sharesCount: PropTypes.number.isRequired,
      totalAmountInCents: PropTypes.number.isRequired
  }).isRequired
};

export default OrderTableRow;
