import React from 'react';
// import PropTypes from 'prop-types';

function buildPriceString(price) {
    const dollars = Math.floor(price / 100);
    const cents = price % 100;
    return cents >= 10 ? `${dollars}.${cents}` : `${dollars}.0${cents}`;
}

function StocksListingTable({data}) {

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
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr>
                        <td>{item.companyName}</td>
                        <td>{item.stockSymbol}</td>
                        <td className="text-right">{buildPriceString(item.openPrice)}</td>
                        <td className="text-right">{buildPriceString(item.highPrice)}</td>
                        <td className="text-right">{buildPriceString(item.lowPrice)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// StocksListingTable.propTypes = {
//     data: PropTypes.arrayOf()
// }

export default StocksListingTable;
