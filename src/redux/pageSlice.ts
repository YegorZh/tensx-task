import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PageState {
    currentPage: number,
    rowsPerPage: number,
}

const initialState: PageState = {
    currentPage: 1,
    rowsPerPage: 8,
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        pageNext: (state) => { state.currentPage++ },
        pagePrevious: (state) => { state.currentPage = Math.max(1, state.currentPage - 1) },
        setCurrentPage: (state, action: PayloadAction<number>) => { state.currentPage = action.payload },
        setRowsPerPage: (state, action: PayloadAction<{ row: number, size: number }>) => {
            const targetRow = 1 + (state.rowsPerPage * (state.currentPage - 1));
            state.rowsPerPage = Math.max(1, action.payload.row);
            state.currentPage = Math.min(Math.ceil((targetRow - 1) / state.rowsPerPage) + 1, Math.ceil(action.payload.size / state.rowsPerPage));
        },
    }
})

export const { pageNext, pagePrevious, setRowsPerPage, setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
