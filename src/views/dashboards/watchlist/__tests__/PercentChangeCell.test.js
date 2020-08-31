import React from "react";
import {render} from '@testing-library/react';
import PercentChangeCell from "../PercentChangeCell";

describe('PercentChangeCell', () => {

    it('renders', () => {
        const {getByTestId} = render(<PercentChangeCell percentChange={50}/>);
        const element = getByTestId(/percent-change-component/i);
        expect(element).toBeDefined();
    });
});
