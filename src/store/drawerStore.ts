import { create } from 'zustand';

interface DrawerStore {
  titleValue: string;
  descriptionValue: string;
  linkValue: string;
  logoValue: string;
  activeDrawer: string;
  drawerTitle: string;
  setTitleValue: (value: string) => void;
  setDescriptionValue: (value: string) => void;
  setLinkValue: (value: string) => void;
  setLogoValue: (value: string) => void;
  setActiveDrawer: (value: string) => void;
  setDrawerTitle: (value: string) => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  titleValue: '',
  descriptionValue: '',
  linkValue: '',
  logoValue: '',
  activeDrawer: '',
  drawerTitle: '',
  setTitleValue: (value) => set({ titleValue: value }),
  setDescriptionValue: (value) => set({ descriptionValue: value }),
  setLinkValue: (value) => set({ linkValue: value }),
  setLogoValue: (value) => set({ logoValue: value }),
  setActiveDrawer: (value) => set({ activeDrawer: value }),
  setDrawerTitle: (value) => set({ drawerTitle: value })
})); 