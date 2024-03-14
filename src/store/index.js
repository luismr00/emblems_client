import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
})