import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './sortSlice';
import pageReducer from './pageSlice';
import searchReducer from './searchSlice';
import studentsDataReducer from './studentsDataSlice';

export const store = configureStore({
  reducer: {
      sort: sortReducer,
      page: pageReducer,
      studentsData: studentsDataReducer,
      search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;