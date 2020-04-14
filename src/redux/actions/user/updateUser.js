export const UPDATE_USER = 'UPDATE_USER';

export const createActionUpdateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: {user}
    };
};

