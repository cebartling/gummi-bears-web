import React from 'react';
import SparkLineChart from "../SparkLineChart";

export default {
    title: 'SparkLineChart',
    component: SparkLineChart,
};

export const defaultComponent = () => {

    const data = [6, 7, 2, 20, 8, 15, 13, 17, 16, 15, 17, 18, 19];

    return (
        <SparkLineChart data={data} referenceLineValue={4}/>
    );
}
