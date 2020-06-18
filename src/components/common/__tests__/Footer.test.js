import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Footer from '../Footer';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Footer', () => {
    const {getByTestId} = render(
        <Footer/>
    );
    const element = getByTestId(/footer-text/i);
    expect(element).toBeDefined();
    expect(element.textContent).toContain('Pintail Consulting LLC');
});
