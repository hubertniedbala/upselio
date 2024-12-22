import { create } from 'zustand';

interface UploadState {
  uploadedLogo: string | null;
  uploadedIcon: string | null;
  uploadedLogoPreview: string | null;
  uploadType: 'logo' | 'icon';
  isUploading: boolean;
  error: string | null;
  setUploadedLogo: (url: string | null) => void;
  setUploadedIcon: (url: string | null) => void;
  setUploadedLogoPreview: (url: string | null) => void;
  setUploadType: (type: 'logo' | 'icon') => void;
  setIsUploading: (status: boolean) => void;
  setError: (error: string | null) => void;
  resetLogo: () => void;
  resetAll: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  uploadedLogo: null,
  uploadedIcon: null,
  uploadedLogoPreview: null,
  uploadType: 'logo',
  isUploading: false,
  error: null,
  setUploadedLogo: (url) => set({ uploadedLogo: url }),
  setUploadedIcon: (url) => set({ uploadedIcon: url }),
  setUploadedLogoPreview: (url) => set({ uploadedLogoPreview: url }),
  setUploadType: (type) => set({ uploadType: type }),
  setIsUploading: (status) => set({ isUploading: status }),
  setError: (error) => set({ error }),
  resetLogo: () => set((state) => ({ 
    uploadedLogo: null,
    uploadedLogoPreview: null,
    uploadType: state.uploadType,
    uploadedIcon: state.uploadedIcon,
  })),
  resetAll: () => set({
    uploadedLogo: null,
    uploadedIcon: null,
    uploadedLogoPreview: null,
    uploadType: 'logo',
    isUploading: false,
    error: null,
  }),
})); 