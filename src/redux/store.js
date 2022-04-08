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
// import newReportReducer from './createNewReport/newReport-reducer';
import users from './auth/auth-slice';

const authPersistConfig = {
  key: 'Users',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    // newReport: persistReducer(persistConfig, newReportReducer),
    auth: persistReducer(authPersistConfig, users),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
