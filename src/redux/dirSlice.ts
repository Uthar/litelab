import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchDir, fetchProject } from '../rest/litelabAPI';
import { Dir, Repo } from '../vcs/vcs';

export interface DirState {
  dirs: Dir[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: DirState = {
  dirs: [],
  status: 'idle',
};

export const get = createAsyncThunk(
  'project/dir',
  async ([repo, branch, path]: string[]) => {
    const response = await fetchDir(repo, branch, path);
    return response.data;
  }
);

export const dirSlice = createSlice({
  name: 'dir',
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
        state.dirs = action.payload;
      });
  },
});

export const { } = dirSlice.actions;

export default dirSlice.reducer;
