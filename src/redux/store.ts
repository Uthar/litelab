import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectReducer from '../redux/projectSlice'
import dirReducer from '../redux/dirSlice'

export const store = configureStore({
  reducer: {
    project: projectReducer,
    dir: dirReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
