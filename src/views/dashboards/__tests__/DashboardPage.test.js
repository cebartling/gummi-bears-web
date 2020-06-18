import React from "react";
import {act, render} from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";
import DashboardPage from "../DashboardPage";
import WatchListStocksQuery from "../../../graphql/queries/stocks/WatchListStocksQuery";
import {useSelector} from "react-redux";
import {getAllByTestId} from "@testing-library/dom";

jest.mock("react-redux", () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));


describe('DashboardPage', () => {

    const currentUserId = 'dfasdf89d7fasdfas0d7fa8ds70987';
    const mockAppState = {
        user: {
            userId: currentUserId,
        },
    }
    const mocks = [
        {
            request: {
                query: WatchListStocksQuery,
                variables: {
                    id: currentUserId,
                },
            },
            result: {
                data: {
                    userById: {
                        userStocks: []
                    },
                },
            },
        },
    ];
    const errorMocks = [
        {
            request: {
                query: WatchListStocksQuery,
                variables: {
                    id: currentUserId,
                },
            },
            error: new Error('Boom!!'),
        },
    ];

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    it('renders initial loading state', () => {
        const {getByTestId} = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <DashboardPage/>
            </MockedProvider>
        );
        const element = getByTestId(/loading-alert-component/i);
        expect(element).toBeDefined();
    });

    it('renders error state', async () => {
        const {getByTestId} = render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <DashboardPage/>
            </MockedProvider>
        );

        await act(() => {
            return new Promise(resolve => setTimeout(resolve, 0)); // wait for response
        });

        const element = getByTestId(/error-alert-component/i);
        expect(element).toBeDefined();
    });

    it('renders final state', async () => {
        const {getByTestId} = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <DashboardPage/>
            </MockedProvider>
        );

        await act(() => {
            return new Promise(resolve => setTimeout(resolve, 0)); // wait for response
        });

        const element = getByTestId(/dashboard-page-watch-list-row/i);
        expect(element).toBeDefined();
    });
});
