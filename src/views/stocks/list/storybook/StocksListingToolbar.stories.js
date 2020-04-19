import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import StocksListingToolbar from "../StocksListingToolbar";

export default {
    title: 'StocksListingToolbar',
    component: StocksListingToolbar,
};

export const defaultToolbar = () => (
    <div className="container-fluid mt-3">
        <StocksListingToolbar/>
    </div>
);

