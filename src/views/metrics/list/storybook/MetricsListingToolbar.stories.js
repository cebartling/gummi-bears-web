import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import MetricsListingToolbar from "../MetricsListingToolbar";

export default {
    title: 'MetricsListingToolbar',
    component: MetricsListingToolbar,
};

export const defaultComponent = () => (
    <div className="container-fluid mt-3">
        <MetricsListingToolbar/>
    </div>
);

