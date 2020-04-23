import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

const FoobarLineChart = ({data, width = 500, height = 300}) => {

    return (
        <LineChart
            width={width}
            height={height}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
            <CartesianGrid strokeDasharray="2 2"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{r: 6}}/>
        </LineChart>
    );
};

export default FoobarLineChart;
