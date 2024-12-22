import { create } from 'zustand';

interface UploadState {
  uploadedLogo: string | null;
  uploadedIcon: string | null;
  isUploading: boolean;
  error: string | null;
  setUploadedLogo: (url: string | null) => void;
  setUploadedIcon: (url: string | null) => void;
  setIsUploading: (status: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  uploadedLogo: null,
  uploadedIcon: null,
  isUploading: false,
  error: null,
  setUploadedLogo: (url) => set({ uploadedLogo: url }),
  setUploadedIcon: (url) => set({ uploadedIcon: url }),
  setIsUploading: (status) => set({ isUploading: status }),
  setError: (error) => set({ error }),
})); 