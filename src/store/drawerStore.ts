import { create } from 'zustand';

interface DrawerState {
  isOpen: boolean;
  activeDrawer: string | null;
  drawerTitle: string;
  inputValue: string;
  toggle: () => void;
  close: () => void;
  open: (drawer: string, title: string, initialValue?: string) => void;
  setInputValue: (value: string) => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  activeDrawer: null,
  drawerTitle: '',
  inputValue: '',
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false, activeDrawer: null, drawerTitle: '', inputValue: '' }),
  open: (drawer, title, initialValue = '') => set({ 
    isOpen: true, 
    activeDrawer: drawer, 
    drawerTitle: title,
    inputValue: initialValue 
  }),
  setInputValue: (value) => set({ inputValue: value })
})); 