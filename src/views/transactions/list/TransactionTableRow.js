import React from 'react';
import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
import DateTimeFormat from '../../../components/common/DateTimeFormat';

const TransactionTableRow = ({userStockTransaction}) => {

    return (
        <tr key={userStockTransaction.id}>
            <td className="text-left">
                {userStockTransaction?.transactionType}
            </td>
            <td className="text-left">
              <DateTimeFormat iso8601DateTimeString={userStockTransaction?.transactionTimestamp}/>
            </td>
            <td className="text-right">
                <CurrencyFormat value={userStockTransaction?.priceInCents / 100}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
            <td className="text-right">
                <NumberFormat value={userStockTransaction?.sharesCount}
                              displayType={'text'}
                              thousandSeparator={true}/>
            </td>
            <td className="text-right">
                <CurrencyFormat value={userStockTransaction?.totalAmountInCents / 100}
                                displayType={'text'}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                decimalScale={2}
                                prefix={'$'}/>
            </td>
        </tr>
    )
}

export default TransactionTableRow;
