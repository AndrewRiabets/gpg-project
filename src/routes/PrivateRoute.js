import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import routes from './routes';

export default function PrivateRoute({
  component: Component,
  navigateTo = routes.auth,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Component /> : <Navigate to={navigateTo} />}</>;
}
