import { create } from 'zustand';

interface DrawerState {
  isOpen: boolean;
  activeDrawer: string | null;
  drawerTitle: string;
  titleValue: string;
  priceValue: string;
  toggle: () => void;
  close: () => void;
  open: (drawer: string, title: string, initialValue?: string) => void;
  setTitleValue: (value: string) => void;
  setPriceValue: (value: string) => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  activeDrawer: null,
  drawerTitle: '',
  titleValue: '',
  priceValue: '',
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ 
    isOpen: false, 
    activeDrawer: null, 
    drawerTitle: '', 
    titleValue: '', 
    priceValue: '' 
  }),
  open: (drawer, title, initialValue = '') => set({ 
    isOpen: true, 
    activeDrawer: drawer, 
    drawerTitle: title,
    ...(drawer === 'title' ? { titleValue: initialValue } : {}),
    ...(drawer === 'price' ? { priceValue: initialValue } : {})
  }),
  setTitleValue: (value) => set({ titleValue: value }),
  setPriceValue: (value) => set({ priceValue: value })
})); 