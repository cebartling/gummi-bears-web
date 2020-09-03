import React from 'react';
import ViewTitle from "../ViewTitle";

export default {
    title: 'Common/ViewTitle',
    component: ViewTitle,
};

export const defaultComponent = () => {
    return (
        <div className="container-fluid">
            <ViewTitle title="This is the title"/>
        </div>
    );
}
