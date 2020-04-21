import React from 'react';

function MetricsListingToolbar({onClickAddNewMetric, onChangeFilterField}) {
    return (
        <div className="row mb-sm-3">
            <button className="btn btn-success"
                    onClick={onClickAddNewMetric}>
                Add new metric
            </button>
            <form className="form-inline my-2 my-lg-0 ">
                <input className="form-control mr-sm-2 ml-sm-2"
                       type="search"
                       placeholder="Filter metrics"
                       aria-label="Filter"
                       onChange={onChangeFilterField}/>
            </form>
        </div>
    );
}

export default MetricsListingToolbar;
