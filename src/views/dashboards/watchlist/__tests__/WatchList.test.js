import React from 'react';
import {render} from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";
import {useDispatch} from "react-redux";
import WatchList from '../WatchList';

jest.mock("react-redux", () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

const watchListStocks = [];

describe('WatchList', () => {
    let mockDispatch = jest.fn();

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockImplementation(() => mockDispatch);
    });

    afterEach(() => {
        useDispatch.mockClear();
    });

    it('renders component', () => {
        const {getByTestId} = render(
            <MockedProvider mocks={[]} addTypename={false}>
                <WatchList watchListStocks={watchListStocks}/>
            </MockedProvider>
        );
        const element = getByTestId(/watch-list-component/i);
        expect(element).toBeDefined();
    });
});
