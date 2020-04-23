import React from 'react';
import {Sparklines, SparklinesCurve, SparklinesReferenceLine} from 'react-sparklines';
import PropTypes from 'prop-types';

const SparkLineChart = ({data, referenceLineValue}) => {
    const style = {stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2'};
    const referenceLineType = 'custom';

    return (
        <Sparklines
            data={data}
            limit={20}
            margin={5}
            svgWidth={300}
            svgHeight={75}>
            <SparklinesCurve color="blue"/>
            <SparklinesReferenceLine value={referenceLineValue}
                                     type={referenceLineType}
                                     style={style}/>
        </Sparklines>
    );
};

SparkLineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    referenceLineValue: PropTypes.number.isRequired
};

export default SparkLineChart;
