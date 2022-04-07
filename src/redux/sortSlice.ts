import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SortState {
    type: string,
    name: number,
    class: number,
    score: number,
    speed: number
}

const initialState: SortState = {
    type: 'name',
    name: 1,
    class: -1,
    score: -1,
    speed: -1
}

const toggle = (num: number) => num === 1 ? -1 : 1;

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortType: (state, action: PayloadAction<string>) => {
            let isValid = false;
            Object.keys(initialState).forEach((key, i) => {
                if (key !== 'type' && action.payload === key) isValid = true;
            });
            if (isValid)
                state.type = action.payload;
            else
                alert('Invalid parameter for setSortType');
        },
        toggleSortName: (state) => {
            state.name = toggle(state.name);
        },
        toggleSortClass: (state) => {
            state.class = toggle(state.class);
        },
        toggleSortScore: (state) => {
            state.score = toggle(state.score);
        },
    }
});

export const {setSortType, toggleSortName, toggleSortClass, toggleSortScore} = sortSlice.actions;
export default sortSlice.reducer;