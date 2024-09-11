import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"
import { Job } from './jobSlice';

interface DataState {
    data: Job[];
}

const initialState: DataState = {
    data: [],
};


const searchSlice = createSlice({
    name: 'searchdata',
    initialState,
    reducers: {
        filterJobs(state, action: PayloadAction<any>) {
            state.data = action.payload;
        },
    },
});

export const { filterJobs } = searchSlice.actions;

export const searchJobs = (state: RootState) => state.searchJobs.data;

export default searchSlice.reducer;