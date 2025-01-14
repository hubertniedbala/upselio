import { create } from 'zustand';

interface DrawerStore {
  isOpen: boolean;
  type: string;
  title: string;
  description?: string;
  open: (type: string, title: string, description?: string) => void;
  close: () => void;
  setDrawerTitle: (title: string) => void;
  toggle: () => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  type: '',
  title: '',
  description: '',
  open: (type, title, description) => set({ isOpen: true, type, title, description }),
  close: () => set({ isOpen: false }),
  setDrawerTitle: (title) => set({ title }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen }))
})); 