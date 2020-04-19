import React from 'react';
import LoadingAlert from "../LoadingAlert";

export default {
    title: 'LoadingAlert',
    component: LoadingAlert,
};

export const defaultComponent = () => {
    return (
        <div className="container p-3">
            <LoadingAlert message="Please wait while your information is loaded."/>
        </div>
    );
}
