import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import routes from './routes';

export default function PublicRoute({
  component: Component,
  restricted = false,
  navigateTo = routes.main,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return <>{shouldNavigate ? <Navigate to={navigateTo} /> : <Component />}</>;
}
