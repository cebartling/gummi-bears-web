export const SET_USER_ID = 'SET_USER_ID';

export const createActionSetUserId = (userId) => {
    return {
        type: SET_USER_ID,
        payload: {userId}
    };
};

