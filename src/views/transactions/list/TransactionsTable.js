import React from 'react';
import TransactionTableRow from "./TransactionTableRow";
import PropTypes from 'prop-types';

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
            <table className="table table-responsive-sm table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col" className="text-left">Transaction type</th>
                    <th scope="col" className="text-left">Date and time</th>
                    <th scope="col" className="text-right">Price</th>
                    <th scope="col" className="text-right">Shares</th>
                    <th scope="col" className="text-right">Total amount</th>
                </tr>
                </thead>
                <tbody>
                {userStock.userStockTransactions.map((userStockTransaction) => {
                    return (<TransactionTableRow userStockTransaction={userStockTransaction} key={userStockTransaction.id}/>)
                })}
                </tbody>
            </table>
        </div>
    );
}

TransactionsTable.propTypes = {
    userStock: PropTypes.shape({
        stockSymbol: PropTypes.string.isRequired,
        userStockTransactions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default TransactionsTable;
