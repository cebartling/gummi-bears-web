import React from 'react';
import {v4 as uuidv4} from 'uuid';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import MetricsListingTable from "../MetricsListingTable";

export default {
    title: 'MetricsListingTable',
    component: MetricsListingTable,
};

const data = [
    {id: uuidv4(), name: '5-Day Simple Moving Average'},
    {id: uuidv4(), name: '20-Day Simple Moving Average'},
    {id: uuidv4(), name: '50-Day Simple Moving Average'},
    {id: uuidv4(), name: '200-Day Simple Moving Average'},
    {id: uuidv4(), name: '5-Day Exponential Moving Average'},
    {id: uuidv4(), name: '20-Day Exponential Moving Average'},
    {id: uuidv4(), name: '50-Day Exponential Moving Average'},
    {id: uuidv4(), name: '200-Day Exponential Moving Average'},
];

export const defaultComponent = () => (
    <div className="container mt-3">
        <MetricsListingTable metrics={data}/>
    </div>
);

