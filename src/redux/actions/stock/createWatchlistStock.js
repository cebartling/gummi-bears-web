export const CREATE_WATCHLIST_STOCK = 'CREATE_WATCHLIST_STOCK';

export const createActionCreateWatchlistStock = (stock) => {
    return {
        type: CREATE_WATCHLIST_STOCK,
        payload: {stock}
    };
};

