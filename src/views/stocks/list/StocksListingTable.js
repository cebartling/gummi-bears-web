import React from 'react';
// import {buildPriceString} from "../../../utils/formatting";
// import PropTypes from 'prop-types';


function StocksListingTable({stocks}) {

    if (!stocks) {
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
                    {/*<th scope="col" className="text-right">Open</th>*/}
                    {/*<th scope="col" className="text-right">High</th>*/}
                    {/*<th scope="col" className="text-right">Low</th>*/}
                </tr>
                </thead>
                <tbody>
                {stocks.map((stock) => (
                    <tr>
                        <td>{stock.name}</td>
                        <td>{stock.symbol}</td>
                        {/*<td className="text-right">{buildPriceString(stock.openPrice)}</td>*/}
                        {/*<td className="text-right">{buildPriceString(stock.highPrice)}</td>*/}
                        {/*<td className="text-right">{buildPriceString(stock.lowPrice)}</td>*/}
                    </tr>
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
