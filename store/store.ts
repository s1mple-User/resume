import { create } from "zustand";

interface StoreState {
  experienceRef: any | null; 
  projectsRef: any | null;
  technologyRef: any | null;

  setExperienceRef: (el: any) => void;
  setProjectsRef: (el: any) => void;
  setTechnologyRef: (el: any) => void;
}

const useStoreRef = create<StoreState>((set) => ({
  experienceRef: null,
  setExperienceRef: (el) => set({ experienceRef: el }),

  projectsRef: null,
  setProjectsRef: (el) => set({ projectsRef: el }),

  technologyRef: null,
  setTechnologyRef: (el) => set({ technologyRef: el }),
}));

export default useStoreRef;
