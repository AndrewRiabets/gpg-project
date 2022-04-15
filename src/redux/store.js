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
import usersReduser from './users/user-reducer';
import companyReducer from './companies/company-reducer';
// import newReportReducer from './createNewReport/newReport-reducer';
import auth from './auth/auth-slice';
import { usersAPI } from './services/usersAPI';
import { companiesAPI } from './services/companiesAPI';

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
    // newReport: persistReducer(persistConfig, newReportReducer),
    [usersAPI.reducerPath]: usersAPI.reducer,
    [companiesAPI.reducerPath]: companiesAPI.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersAPI.middleware, companiesAPI.middleware),
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
