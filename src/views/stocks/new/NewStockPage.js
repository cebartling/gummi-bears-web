import React from 'react';
import ViewTitle from "../../../components/common/ViewTitle";
import NewStockForm from "./NewStockForm";

function NewStockPage() {
    return (
        <div className="p-3">
            <ViewTitle title="New Stock"/>
            <NewStockForm debugForm={false}/>
        </div>
    );
}

export default NewStockPage;
