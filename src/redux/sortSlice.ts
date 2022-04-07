import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SortState {
    readonly [key: string]: any,
    type: string,
    name: number,
    id: number,
    score: number,
    speed: number
}

const initialState: SortState = {
    type: 'id',
    name: -1,
    id: 1,
    score: -1,
    speed: -1,
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
        toggleSortId: (state) => {
            state.id = toggle(state.id);
        },
        toggleSortScore: (state) => {
            state.score = toggle(state.score);
        },
        toggleSortSpeed: (state) => {
            state.speed = toggle(state.speed);
        },
    }
});

export const {setSortType, toggleSortName, toggleSortId, toggleSortScore, toggleSortSpeed} = sortSlice.actions;
export default sortSlice.reducer;