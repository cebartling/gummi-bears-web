import React from 'react';
import TransactionTableRow from "./TransactionTableRow";
// import PropTypes from 'prop-types';
// import TransactionsTableRow from "./StockListingTableRow";

function TransactionsTable({userStock}) {

    if (!userStock) {
        return (
            <div className="row">
                <div className="alert alert-info">
                    No data is currently available.
                </div>
            </div>
        );
    }

    return (
        <div className="row">
            <h3>{userStock.companyName} - {userStock.stockSymbol}</h3>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col" className="text-left">Transaction type</th>
                    <th scope="col" className="text-right">Date/time</th>
                    <th scope="col" className="text-right">Price</th>
                    <th scope="col" className="text-right">Number of shares</th>
                </tr>
                </thead>
                <tbody>
                {userStock.userStockTransactions.map((userStockTransaction) => {
                    return (<TransactionTableRow userStockTransaction={userStockTransaction}/>)
                })}
                </tbody>
            </table>
        </div>
    );
}

// TransactionsTable.propTypes = {
//     stocks: PropTypes.arrayOf()
// }

export default TransactionsTable;
