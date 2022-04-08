import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TestData {
    absent: boolean,
    concept: string,
    date: string,
    expSpeed: string,
    label: string,
    score: number,
    speed: string,
    total: number
}

export interface StudentsData {
    class: string,
    id: number,
    name: string,
    parents: string[],
    score: string,
    speed: string,
    isExpanded: boolean,
    tests: TestData[],
}

export interface StudentsDataState {
    totalPages: number,
    data?: StudentsData[],
    totalCount: number,
}

let initialState: StudentsDataState = { totalPages: 1, totalCount: 0 };

const studentsDataSlice = createSlice(
    {
        name: 'studentsData',
        initialState,
        reducers: {
            setStudentsData: (state, action: PayloadAction<StudentsDataState>) => state = action.payload,
            resetStudentsData: (state) => { state = initialState },
            toggleRowExpand: (state, action: PayloadAction<number>) => {
                if (state.data) {
                    const flip = state.data[action.payload].isExpanded ? false : true;
                    state.data[action.payload].isExpanded = flip;
                }
            },
        }
    }
);

export const { setStudentsData, resetStudentsData, toggleRowExpand } = studentsDataSlice.actions

export default studentsDataSlice.reducer