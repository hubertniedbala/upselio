import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './drawerSlice';

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 