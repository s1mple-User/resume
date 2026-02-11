import { create } from "zustand";

interface StoreState {
 
  experienceRef: any | null; 
  projectsRef: any | null;
  technologyRef: any | null;

  setExperienceRef: (el: any | null) => void;
  setProjectsRef: (el: any | null) => void;
  setTechnologyRef: (el: any | null) => void;
}

const useStoreRef = create<StoreState>((set) => ({
  experienceRef: null,
  projectsRef: null,
  technologyRef: null,

  setExperienceRef: (el) => set({ experienceRef: el }),
  setProjectsRef: (el) => set({ projectsRef: el }),
  setTechnologyRef: (el) => set({ technologyRef: el }),
}));

export default useStoreRef;