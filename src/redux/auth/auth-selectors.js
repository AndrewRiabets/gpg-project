export const getUsername = state => state.auth.user.name;
export const getUserRole = state => state.auth.user.role;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;
export const getIsRefreshingUser = state => state.auth.isRefreshingUser;
