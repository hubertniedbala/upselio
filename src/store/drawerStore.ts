import { create } from 'zustand';

interface DrawerState {
  isOpen: boolean;
  activeDrawer: string | null;
  drawerTitle: string;
  titleValue: string;
  priceValue: string;
  descriptionValue: string;
  linkValue: string;
  logoValue: string;
  toggle: () => void;
  close: () => void;
  open: (drawer: string, title: string, initialValue?: string) => void;
  setTitleValue: (value: string) => void;
  setPriceValue: (value: string) => void;
  setDescriptionValue: (value: string) => void;
  setLinkValue: (value: string) => void;
  setLogoValue: (value: string) => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  activeDrawer: null,
  drawerTitle: '',
  titleValue: '',
  priceValue: '',
  descriptionValue: '',
  linkValue: '',
  logoValue: '',
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ 
    isOpen: false, 
    activeDrawer: null, 
    drawerTitle: '', 
    titleValue: '', 
    priceValue: '',
    descriptionValue: '',
    linkValue: '',
    logoValue: ''
  }),
  open: (drawer, title, initialValue = '') => set({ 
    isOpen: true, 
    activeDrawer: drawer, 
    drawerTitle: title,
    ...(drawer === 'title' ? { titleValue: initialValue } : {}),
    ...(drawer === 'price' ? { priceValue: initialValue } : {}),
    ...(drawer === 'description' ? { descriptionValue: initialValue } : {}),
    ...(drawer === 'link' ? { linkValue: initialValue } : {}),
    ...(drawer === 'logo' ? { logoValue: initialValue } : {})
  }),
  setTitleValue: (value) => set({ titleValue: value }),
  setPriceValue: (value) => set({ priceValue: value }),
  setDescriptionValue: (value) => set({ descriptionValue: value }),
  setLinkValue: (value) => set({ linkValue: value }),
  setLogoValue: (value) => set({ logoValue: value })
})); 