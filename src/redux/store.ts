import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './sortSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
      sort: sortReducer,
      page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;