import React from 'react';

function StocksListingToolbar(props) {
    return (
        <div className="row mb-sm-3">
            <button className="btn btn-success">Add new stock</button>
            <form className="form-inline my-2 my-lg-0 ">
                <input className="form-control mr-sm-2 ml-sm-2"
                       type="search"
                       placeholder="Filter stocks"
                       aria-label="Filter"/>
                <button className="btn btn-outline-primary my-2 my-sm-0"
                        type="submit">Filter</button>
            </form>
        </div>
    );
}

export default StocksListingToolbar;
