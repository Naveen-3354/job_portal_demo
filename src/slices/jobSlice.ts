import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

export interface Job {
  
    title: string,
    company: String,
    experience: String,
    skills: String[],
    description:String,
    location: String,
    id: number
}


interface JobDatas{
  data : Array<Job>
};

const initialState: JobDatas= {
  data:[],
};

const jobSlice = createSlice({
  name:"allJobs",
  initialState,
  reducers:{
    setData(state, action){
      state.data = action.payload
    }
  }
});

export const {setData } = jobSlice.actions;
export const selectAllJobs  = (state : RootState) => state.allJobs.data;
export default jobSlice.reducer;