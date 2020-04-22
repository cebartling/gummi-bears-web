import React from 'react';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function StocksListingToolbar({onClickAddNewStock, onChangeFilterField}) {
    return (
        <div className="row mb-sm-3">
            <button className="btn btn-success"
                    onClick={onClickAddNewStock}>
                <FontAwesomeIcon icon={faPlusCircle}/> Add new stock
            </button>
            <form className="form-inline my-2 my-lg-0 ">
                <input className="form-control mr-sm-2 ml-sm-2"
                       type="search"
                       placeholder="Filter stocks"
                       aria-label="Filter"
                       onChange={onChangeFilterField}/>
            </form>
        </div>
    );
}

export default StocksListingToolbar;
