import { create } from 'zustand';

interface UploadState {
  uploadType: string;
  setUploadType: (type: string) => void;
}

export const useUploadStore = create<UploadState>()((set) => ({
  uploadType: 'logo',
  setUploadType: (type: string) => set({ uploadType: type }),
})); 