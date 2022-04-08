import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
    value: string,
    stamp: number,
}

const initialState: SearchState = {
    value: '',
    stamp: 0,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => { 
            state.value = action.payload;
         },
        stampSearch: (state) => { state.stamp++ },
    }
});

export const { setSearchValue, stampSearch } = searchSlice.actions;
export default searchSlice.reducer;
