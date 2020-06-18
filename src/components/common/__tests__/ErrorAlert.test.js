import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ErrorAlert from "../ErrorAlert";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const message = 'My error message';

describe('ErrorAlert', () => {

    it('renders alert message', () => {
        const {getByTestId} = render(
            <ErrorAlert message={message}/>
        );
        const element = getByTestId(/alert-div/i);
        expect(element).toBeDefined();
        expect(element.textContent).toContain(message);
    });

    it('renders FontAwesome icon', () => {
        const {getByTestId} = render(
            <ErrorAlert message={message}/>
        );
        const element = getByTestId(/font-awesome-icon-exclamation-triangle/i);
        expect(element).toBeDefined();
    });
});
