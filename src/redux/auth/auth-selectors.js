const getUsername = state => state.auth.user.name;
const getUserRole = state => state.auth.user.role;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
  getUsername,
  getUserRole,
  getIsLoggedIn,
};
export default authSelectors;
