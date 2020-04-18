import React from 'react';
import StocksListingToolbar from "./StocksListingToolbar";
import StocksListingTable from "./StocksListingTable";
import ViewTitle from "../../../components/common/ViewTitle";

function StocksListingView({userStocks}) {
    return (
        <div className="p-3">
            <ViewTitle title="Stocks"/>
            <StocksListingToolbar/>
            <StocksListingTable userStocks={userStocks}/>
        </div>
    );
}

export default StocksListingView;
