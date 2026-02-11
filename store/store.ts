import { create } from "zustand";

interface StoreState {
 
  experienceRef: HTMLElement | null; 
  projectsRef: HTMLElement | null;
  technologyRef: HTMLElement | null;

  setExperienceRef: (el: HTMLElement | null) => void;
  setProjectsRef: (el: HTMLElement | null) => void;
  setTechnologyRef: (el: HTMLElement | null) => void;
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