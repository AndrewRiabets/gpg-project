import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth/auth-slice';
import usersReduser from './users/user-reducer';
import companyReducer from './companies/company-reducer';
import reportsReducer from './reports/reports-reducer';
import { usersAPI } from './services/usersAPI';
import { companiesAPI } from './services/companiesAPI';
import { reportsAPI } from './services/reportsAPI';

const authPersistConfig = {
  key: 'Users',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, auth),
    users: usersReduser,
    companies: companyReducer,
    reports: reportsReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [companiesAPI.reducerPath]: companiesAPI.reducer,
    [reportsAPI.reducerPath]: reportsAPI.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      usersAPI.middleware,
      companiesAPI.middleware,
      reportsAPI.middleware,
    ),
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
