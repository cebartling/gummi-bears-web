import React from 'react';
import ErrorAlert from "../ErrorAlert";

export default {
    title: 'Common/ErrorAlert',
    component: ErrorAlert,
};

export const defaultComponent = () => {
    return (
        <div className="container p-3">
            <ErrorAlert message="Unable to load your information at this time."/>
        </div>
    );
}
