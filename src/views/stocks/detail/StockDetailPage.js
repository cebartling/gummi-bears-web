import React from 'react';
import ViewTitle from "../../../components/common/ViewTitle";
import StockDetailForm from "./StockDetailForm";

function StockDetailPage() {
    return (
        <div className="p-3">
            <ViewTitle title="New Stock"/>
            <StockDetailForm debugForm={false}/>
        </div>
    );
}

export default StockDetailPage;
