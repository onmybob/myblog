import { create } from 'zustand'

type Store = {
  key: string
  setKey: (key:string) => void
}


export const headSearchStore = create<Store>()((set) => ({
    key: '',
    setKey: (key:string) => set(() => ({ key })),
  }))
 

export const useStore2 = create(set=>({
    key:"",
    inc:()=>set((state: { key: string })=>({key:state.key+'333'}))
}))