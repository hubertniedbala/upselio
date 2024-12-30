import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
  isOpen: boolean;
  shouldFocusInput: boolean;
  editedServiceId?: string;
}

const initialState: DrawerState = {
  isOpen: false,
  shouldFocusInput: false,
  editedServiceId: undefined
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.shouldFocusInput = true;
      state.editedServiceId = action.payload;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.shouldFocusInput = false;
      state.editedServiceId = undefined;
    },
    clearFocusFlag: (state) => {
      state.shouldFocusInput = false;
    }
  }
});

export const { openDrawer, closeDrawer, clearFocusFlag } = drawerSlice.actions;
export default drawerSlice.reducer; 