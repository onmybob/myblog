import { create } from "zustand"

type Store = {
    count: number,
    list:Array<any>,
    inc: () => void
  }
  
 export const useStore = create<Store>()((set) => ({
    count: 1,
    list:[],
    inc: () => set((state) => ({ count: state.count + 1 })),
  }))