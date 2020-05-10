import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import TransactionsToolbar from "../TransactionsToolbar";

export default {
    title: 'TransactionsToolbar',
    component: TransactionsToolbar,
};

export const defaultComponent = () => (
    <div className="container mt-3">
        <h2>Stock Detail Form</h2>
        <TransactionsToolbar/>
    </div>
);

