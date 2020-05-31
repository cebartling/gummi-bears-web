import React from 'react';
import AsyncSelect from 'react-select/async';
import {useQuery} from '@apollo/client';
import SymbolSearchQuery from '../../../graphql/queries/stocks/SymbolSearchQuery';
import './WatchListToolbar.scss';

const WatchListToolbar = () => {
    const {refetch} = useQuery(SymbolSearchQuery, {
        variables: {
            keywords: 'MSFT'
        },
        skip: true
    });

    const onChangeSymbolSearchSelect = selectedOption => {
        console.log(`onChangeSymbolSearchSelect`, selectedOption);
    };

    const loadOptions = async (newKeywordsValue) => {
        if (newKeywordsValue.length > 1) {
            const {data: {symbolSearch}} = await refetch({
                keywords: newKeywordsValue
            });
            return symbolSearch.map((it) => {
                return {value: it, label: `${it.symbol} - ${it.name}`};
            });
        } else {
            return [];
        }
    };

    return (
        <div className="p-1">
            <AsyncSelect
                cacheOptions
                defaultOptions
                isClearable={true}
                placeholder={'Type symbol...'}
                autofocus={true}
                loadOptions={loadOptions}
                onChange={onChangeSymbolSearchSelect}
            />
        </div>
    );
};

export default WatchListToolbar;
