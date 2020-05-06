import React from 'react';
// import PropTypes from 'prop-types';
import StocksListingTableRow from "./StockListingTableRow";

function StocksListingTable({userStocks}) {

    if (!userStocks) {
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
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Company name</th>
                    <th scope="col">Stock symbol</th>
                    <th scope="col" className="text-right">Open</th>
                    <th scope="col" className="text-right">High</th>
                    <th scope="col" className="text-right">Low</th>
                    <th scope="col" className="text-right">Close</th>
                    <th scope="col" className="text-right">Volume</th>
                    <th scope="col" className="text-center">Direction</th>
                </tr>
                </thead>
                <tbody>
                {userStocks.map((userStock) => (
                    <StocksListingTableRow stock={userStock.stock}
                                           key={userStock.stock.id}
                                           userStockId={userStock.id}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// StocksListingTable.propTypes = {
//     stocks: PropTypes.arrayOf()
// }

export default StocksListingTable;
