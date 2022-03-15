import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import routes from './routes/routes';

import './App.css';
// import Container from './Container/Container';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={routes.main} element={<MainPage />}></Route>
          <Route path={routes.report} element={<ReportPage />}></Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
