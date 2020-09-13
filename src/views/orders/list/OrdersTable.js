import React from 'react';
import OrderTableRow from "./OrderTableRow";
import PropTypes from 'prop-types';

function OrdersTable({userStock}) {

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
            <table className="table table-sm table-responsive-sm table-bordered table-striped table-hover orders-table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col" className="text-left orders-table-heading-transaction-type">Transaction type</th>
                    <th scope="col" className="text-left orders-table-heading-transaction-timestamp">Local date and time</th>
                    <th scope="col" className="text-right orders-table-heading-price">Price</th>
                    <th scope="col" className="text-right orders-table-heading-shares">Shares</th>
                    <th scope="col" className="text-right orders-table-heading-total-amount">Total amount</th>
                </tr>
                </thead>
                <tbody>
                {userStock.orders.map((order) => {
                    return (<OrderTableRow order={order} key={order.id}/>)
                })}
                </tbody>
            </table>
        </div>
    );
}

OrdersTable.propTypes = {
    userStock: PropTypes.shape({
        stockSymbol: PropTypes.string.isRequired,
        companyName: PropTypes.string.isRequired,
        orders: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default OrdersTable;
