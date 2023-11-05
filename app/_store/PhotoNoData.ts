import { create } from "zustand"


type Status={
    show:boolean,
    toggleShow: () => void;
} 

export const photoNoDataStore = create<Status>((set) => ({
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show})),
}))