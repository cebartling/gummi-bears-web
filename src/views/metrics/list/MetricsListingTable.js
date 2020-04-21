import React from 'react';
import PropTypes from 'prop-types';


function MetricsListingTable({metrics}) {

    if (!metrics) {
        return (
            <div className="row">
                <div className="alert alert-info">
                    No data is currently available.
                </div>
            </div>
        );
    }

    return (
        <div className="row">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Metric name</th>
                </tr>
                </thead>
                <tbody>
                {metrics.map((metric, index) => (
                    <tr key={index}>
                        <td>{metric.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

MetricsListingTable.propTypes = {
    metrics: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
        })
    )
}

export default MetricsListingTable;
