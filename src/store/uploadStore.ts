import { create } from 'zustand';

interface UploadState {
  uploadType: string;
  uploadedLogo: File | null;
  setUploadType: (type: string) => void;
  setUploadedLogo: (file: File | null) => void;
}

export const useUploadStore = create<UploadState>()((set) => ({
  uploadType: 'logo',
  uploadedLogo: null,
  setUploadType: (type: string) => set({ uploadType: type }),
  setUploadedLogo: (file: File | null) => set({ uploadedLogo: file }),
})); 