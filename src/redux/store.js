import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from '../../src/redux/contactsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from '../../src/redux/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [''], - for choosing the items that need to be added to local store
  // blacklist: [''], - for choosing the items that DO NOT need to be added to local store
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store);
