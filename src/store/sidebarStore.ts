import { create } from 'zustand';

type ElementType = 'library' | 'title' | 'description' | 'logo' | 'price' | 'cta' | 'link';

interface SidebarState {
  activeElement: ElementType;
  setActiveElement: (element: ElementType) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  activeElement: 'library',
  setActiveElement: (element) => set({ activeElement: element }),
})); 