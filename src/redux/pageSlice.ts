import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SortState {
    currentPage: number,
    rowsPerPage: number,
}

const initialState: SortState = {
    currentPage: 1,
    rowsPerPage: 8,
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        pageNext: (state) => { state.currentPage++ },
        pagePrevious: (state) => { state.currentPage = Math.max(1, state.currentPage - 1) },
        setRowsPerPage: (state, action: PayloadAction<number>) => { state.rowsPerPage = Math.max(1, action.payload) },
    }
})

export const {pageNext, pagePrevious, setRowsPerPage} = pageSlice.actions;
export default pageSlice.reducer;
