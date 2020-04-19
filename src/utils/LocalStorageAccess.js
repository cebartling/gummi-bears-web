const KEY_TOKEN = 'auth-token';

export const setToken = (token) => {
    localStorage.setItem(KEY_TOKEN, token);
}

export const getToken = () => {
    return localStorage.getItem(KEY_TOKEN);
}

export const clearToken = () => {
    localStorage.setItem(KEY_TOKEN, null);
}
