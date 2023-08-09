import { createSlice } from '@reduxjs/toolkit';

export const utiltitiesSlice = createSlice( {
    name: 'utiltities',
    initialState: {
        Language: "en",
        filterSheet: false,
    },
    reducers: {
        ChangeLanguage: ( state, action ) => {
            state.Language = action.payload;
        }, openFilters: ( state ) => {
            state.filterSheet = true;
        },
        closeFilters: ( state ) => {
            state.filterSheet = false;
        },
    },
} );

export const {
    ChangeLanguage,
    openFilters,
    closeFilters

} = utiltitiesSlice.actions;
export default utiltitiesSlice.reducer;