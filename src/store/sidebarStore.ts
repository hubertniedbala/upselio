import { create } from 'zustand';

interface SidebarStore {
  activeElement: string;
  setActiveElement: (element: string) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  activeElement: '',
  setActiveElement: (element) => set({ activeElement: element }),
})); 