import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './sortSlice';
import pageReducer from './pageSlice';
import studentsDataReducer from './studentsDataSlice';

export const store = configureStore({
  reducer: {
      sort: sortReducer,
      page: pageReducer,
      studentsData: studentsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;