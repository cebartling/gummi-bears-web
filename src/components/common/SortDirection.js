import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import './SortDirection.scss';

const SortDirection = ({onChangeSortDirection}) => {
    const [sortAscending, setSortAscending] = useState(true);

    const onClickSortDirection = () => {
        setSortAscending(!sortAscending);
        onChangeSortDirection(sortAscending);
    }

    return (
        <button onClick={onClickSortDirection} className="sort-direction__button">
            {sortAscending ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
        </button>
    );
};

SortDirection.propTypes = {
    onChangeSortDirection: PropTypes.func.isRequired
};

export default SortDirection;
