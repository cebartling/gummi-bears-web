export const userSelector = (state) => state.user;
export const profilePictureUrlSelector = (state) => state.user.picture;
export const userEmailSelector = (state) => state.user.email;
export const tokenSelector = (state) => state.user.token;
export const isAuthenticatedSelector = (state) => state.user.isAuthenticated;
export const userIdSelector = (state) => state.user.userId;

