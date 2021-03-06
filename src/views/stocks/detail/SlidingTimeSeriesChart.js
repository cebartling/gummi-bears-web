import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const SlidingTimeSeriesChart = ({timeSeriesData}) => {

    return (
        <div className="row mt-sm-3">
            <h3>Last 30 Days Prices</h3>
            <ResponsiveContainer width='100%' aspect={2.0 / 0.8}>
                <LineChart
                    data={timeSeriesData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                    <CartesianGrid strokeDasharray="2 2"/>
                    <XAxis dataKey="eventDate" reversed={true} name="Date"/>
                    <YAxis type="number" domain={['dataMin', 'dataMax']}/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="openPrice" name={'Open'} stroke="#8884d8" activeDot={{r: 6}}/>
                    <Line type="monotone" dataKey="closePrice" name={'Close'} stroke="#82ca9d" activeDot={{r: 6}}/>
                    <Line type="monotone" dataKey="highPrice" name={'High'} stroke="#9C020B" activeDot={{r: 6}}/>
                    <Line type="monotone" dataKey="lowPrice" name={'Low'} stroke="#007D9C" activeDot={{r: 6}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SlidingTimeSeriesChart;
