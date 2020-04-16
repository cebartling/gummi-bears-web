import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import StockDetailForm from "../StockDetailForm";

export default {
    title: 'StockDetailForm',
    component: StockDetailForm,
};

export const defaultForm = () => (
    <div className="container mt-3">
        <StockDetailForm/>
    </div>
);

export const debuggingForm = () => (
    <div className="container mt-3">
        <StockDetailForm debugForm={true}/>
    </div>
);
