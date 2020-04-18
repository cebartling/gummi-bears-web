import React from 'react';
import StocksListingToolbar from "./StocksListingToolbar";
import StocksListingTable from "./StocksListingTable";
import ViewTitle from "../../../components/common/ViewTitle";

function StocksListingView({userStocks, onClickAddNewStock, onChangeFilterField}) {
    return (
        <div className="p-3">
            <ViewTitle title="Stocks"/>
            <StocksListingToolbar onClickAddNewStock={onClickAddNewStock}
                                  onChangeFilterField={onChangeFilterField}/>
            <StocksListingTable userStocks={userStocks}/>
        </div>
    );
}

export default StocksListingView;
