export const CREATE_ORDER = 'CREATE_ORDER';

export const createActionCreateOrder = (order) => {
    return {
        type: CREATE_ORDER,
        payload: {order}
    };
};

