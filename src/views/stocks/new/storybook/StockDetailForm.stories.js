import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import NewStockForm from "../NewStockForm";

export default {
    title: 'StockDetailForm',
    component: NewStockForm,
};

export const defaultForm = () => (
    <div className="container mt-3">
        <h2>Stock Detail Form</h2>
        <NewStockForm/>
    </div>
);

export const debuggingForm = () => (
    <div className="container mt-3">
        <h2>Stock Detail Form with form debugging</h2>
        <NewStockForm debugForm={true}/>
    </div>
);
