import { configureStore } from '@reduxjs/toolkit';
import UtiltitiesReducer from './Slices/Utiltities';

const reducer = {

    utiltities: UtiltitiesReducer,
};

export const store = configureStore( {
    reducer: reducer,
    devTools: true,
} );