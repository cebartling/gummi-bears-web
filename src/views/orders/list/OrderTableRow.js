import React from 'react';
import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
import Moment from "react-moment";
import PropTypes from "prop-types";

const OrderTableRow = ({order}) => {

    return (
        <tr key={order.id}>
            <td className="text-left">
                {order?.transactionType}
            </td>
            <td className="text-left">
                <Moment format="MMMM D, YYYY [at] h:mm A"
                        date={order?.orderTimestamp}/>
            </td>
            <td className="text-right">
                <CurrencyFormat value={order?.priceInCents / 100}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right">
                <NumberFormat value={order?.sharesCount}
                              displayType={'text'}
                              thousandSeparator={true}/>
            </td>
            <td className="text-right">
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
