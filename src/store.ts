import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobSlice';
import userReducer from './slices/userSlice';
import searchReducer from './slices/searchData';

export const store = configureStore({
  reducer: {
    allJobs: jobsReducer,
    searchJobs : searchReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
