import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './counterSlice';
import {api} from '../api/api';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware);
    }
})