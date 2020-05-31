import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import {useQuery} from '@apollo/client';
import SymbolSearchQuery from '../../../graphql/queries/stocks/SymbolSearchQuery';

const WatchListToolbar = ({addWatch}) => {
    const {refetch} = useQuery(SymbolSearchQuery, {skip: true});
    const [selectedOption, setSelectedOption] = useState(null);

    const onChangeSymbolSearchSelect = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const loadOptions = async (newKeywordsValue) => {
        if (newKeywordsValue.length > 1) {
            const {data: {symbolSearch}} = await refetch({keywords: newKeywordsValue});
            return symbolSearch.map((it) => {
                return {value: it, label: `${it.symbol} - ${it.name}`};
            });
        } else {
            return [];
        }
    };

    const onClickAddButton = () => {
        addWatch(selectedOption.value);
        setSelectedOption(null);
    };

    return (
        <div className="p-2 d-flex flex-row">
            <div className="flex-grow-1">
                <AsyncSelect
                    value={selectedOption}
                    cacheOptions
                    defaultOptions
                    isClearable={true}
                    placeholder={'Type symbol...'}
                    autofocus={true}
                    loadOptions={loadOptions}
                    onChange={onChangeSymbolSearchSelect}
                />
            </div>
            <button className="btn btn-success ml-1"
                    disabled={selectedOption === null}
                    onClick={onClickAddButton}>
                Add
            </button>
        </div>
    );
};

WatchListToolbar.propTypes = {
    addWatch: PropTypes.func.isRequired
};

export default WatchListToolbar;
