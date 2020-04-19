export const CREATE_STOCK = 'CREATE_STOCK';

export const createActionCreateStock = (stock) => {
    return {
        type: CREATE_STOCK,
        payload: {stock}
    };
};

