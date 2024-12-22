import create from 'zustand';

interface SidebarState {
  activeElement: string;
  setActiveElement: (type: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  activeElement: 'library',
  setActiveElement: (type) => set({ activeElement: type }),
})); 