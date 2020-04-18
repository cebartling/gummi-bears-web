import React from 'react';
import ErrorAlert from "../ErrorAlert";

export default {
    title: 'ErrorAlert',
    component: ErrorAlert,
};

export const defaultComponent = () => {
    return (
        <div className="container">
            <ErrorAlert message="Unable to load your information at this time."/>
        </div>
    );
}
