import { create } from 'zustand';

interface UploadState {
  uploadedLogo: string | null;
  uploadedIcon: string | null;
  uploadedLogoPreview: string | null;
  isUploading: boolean;
  error: string | null;
  setUploadedLogo: (url: string | null) => void;
  setUploadedIcon: (url: string | null) => void;
  setUploadedLogoPreview: (url: string | null) => void;
  setIsUploading: (status: boolean) => void;
  setError: (error: string | null) => void;
  resetLogo: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  uploadedLogo: null,
  uploadedIcon: null,
  uploadedLogoPreview: null,
  isUploading: false,
  error: null,
  setUploadedLogo: (url) => set({ uploadedLogo: url }),
  setUploadedIcon: (url) => set({ uploadedIcon: url }),
  setUploadedLogoPreview: (url) => set({ uploadedLogoPreview: url }),
  setIsUploading: (status) => set({ isUploading: status }),
  setError: (error) => set({ error }),
  resetLogo: () => set({ uploadedLogo: null, uploadedLogoPreview: null }),
})); 