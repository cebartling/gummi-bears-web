import React, {useState} from 'react';
import Select from 'react-select';
import './WatchListToolbar.scss';

const WatchListToolbar = () => {
    const [selectedOption, setSelectedOption] = useState(undefined);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const onChangeSymbolSearchSelect = selectedOption => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className="p-1">
            <Select
                autofocus={true}
                value={selectedOption}
                onChange={onChangeSymbolSearchSelect}
                options={options}
            />
        </div>
    );
};

export default WatchListToolbar;
