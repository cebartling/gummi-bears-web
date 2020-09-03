import {v4 as uuidv4} from 'uuid';

export const order1 = {
    id: uuidv4(),
    transactionType: 'buy',
    orderTimestamp: '2020-09-02T13:33:45.000Z',
    priceInCents: 34567,
    sharesCount: 11,
    totalAmountInCents: 380237
};

export const order2 = {
    id: uuidv4(),
    transactionType: 'sell',
    orderTimestamp: '2020-09-02T14:01:45.000Z',
    priceInCents: 35122,
    sharesCount: 11,
    totalAmountInCents: 386342
};

export const order3 = {
    id: uuidv4(),
    transactionType: 'buy',
    orderTimestamp: '2020-09-02T18:03:52.000Z',
    priceInCents: 34411,
    sharesCount: 2,
    totalAmountInCents: 68822
};
