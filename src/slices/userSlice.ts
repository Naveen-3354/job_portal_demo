import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"


export interface Skills {
  label : string,
  value:string
}
interface UserState {
  firstName :string,
  lastName:string,
  email:string,
  skills:Skills[],
  about:string,
  applied:number[]
}
const initialState: UserState =  {
  firstName: '',
  lastName: '',
  email: '',
  skills: [],
  about: '',
  applied: []
};

const userSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{firstName:string,lastName:string,email:string,about:string,skills:Skills[]}>) { 
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.about = action.payload.about
      state.skills.push(...action.payload.skills)
    },

    setAppliedJobs(state, action :PayloadAction<number>){
      state.applied.push(action.payload)
    }
  },
});

export const { setUser, setAppliedJobs } = userSlice.actions;

export const user = (state : RootState) =>state.user;

export const userJobs = (state: RootState) => state.user.applied;

export default userSlice.reducer;
