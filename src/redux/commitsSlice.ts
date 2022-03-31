import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchCommits, fetchDir, fetchProject } from '../rest/litelabAPI';
import { Commit, Dir, Repo } from '../vcs/vcs';


export interface CommitsState {
  commits: Commit[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CommitsState = {
  commits: [],
  status: 'idle',
};

export const get = createAsyncThunk(
  'commits',
  async ([repo, branch, page, pageSize]: [string, string, number, number]) => {
    const response = await fetchCommits(repo, branch, page, pageSize);
    return response.data;
  }
);

export const commitsSlice = createSlice({
  name: 'commits',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(get.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(get.fulfilled, (state, action) => {
        state.status = 'idle';
        state.commits = action.payload;
      });
  },
});

export const { } = commitsSlice.actions;

export default commitsSlice.reducer;
