import React from 'react';
import StocksListingToolbar from "./StocksListingToolbar";
import StocksListingTable from "./StocksListingTable";
import ViewTitle from "../../../components/common/ViewTitle";

function StocksListingView({data}) {
    return (
        <>
            <ViewTitle title="Stocks"/>
            <StocksListingToolbar/>
            <StocksListingTable data={data}/>
        </>
    );
}

export default StocksListingView;
