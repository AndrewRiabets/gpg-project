import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { routes, PrivateRoute, PublicRoute } from './routes';
import Header from './Components/Header/Header';
import './App.css';
import { authOperations } from './redux/auth';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  });
  return (
    <>
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
    </>
  );
}

export default App;
