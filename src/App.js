import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { routes, PrivateRoute, PublicRoute } from './routes';
import Header from './Components/Header/Header';
import './App.css';
import { authOperations } from './redux/auth';
import { getIsRefreshingUser } from './redux/auth/auth-selectors';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const isRefreshingUser = useSelector(getIsRefreshingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);
  return (
    <>
      {!isRefreshingUser && (
        <div>
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route
                exact
                path={routes.auth}
                element={<PublicRoute restricted component={AuthPage} />}
              ></Route>
              <Route
                path={routes.main}
                element={<PrivateRoute component={MainPage} />}
              ></Route>
              <Route
                path={routes.report}
                element={<PrivateRoute component={ReportPage} />}
              ></Route>
              <Route
                path={routes.admin}
                element={<PrivateRoute component={AdminPage} />}
              ></Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
