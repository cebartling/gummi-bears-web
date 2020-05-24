export const REGISTER = 'REGISTER';

export const createActionRegister = (email, password) => {
    return {
        type: REGISTER,
        payload: {email, password}
    };
};

