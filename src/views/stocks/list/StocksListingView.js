import React from 'react';
import StocksListingToolbar from "./StocksListingToolbar";
import StocksListingTable from "./StocksListingTable";
import ViewTitle from "../../../components/common/ViewTitle";

function StocksListingView({stocks}) {
    return (
        <>
            <ViewTitle title="Stocks"/>
            <StocksListingToolbar/>
            <StocksListingTable stocks={stocks}/>
        </>
    );
}

export default StocksListingView;
