import { Image } from '@/types/image';
import { create } from 'zustand'

interface ImageStore {
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;

  generatedImage: Image | null;
  setGeneratedImage: (generatedImage: Image | null) => void;

  gallery: Image[] | null;
  setGallery: (gallery: Image[] | null) => void;
}

export const useImageStore = create<ImageStore>((set)=>({
    isGenerating: false,
    setIsGenerating: (isGenerating) => set(() => ({ isGenerating })),

    generatedImage: null,
    setGeneratedImage: (generatedImage) => set(() => ({ generatedImage })),

    gallery: null,
    setGallery: (gallery) => set(() => ({ gallery })),
}))
