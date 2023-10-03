// import { IPhotoType } from "types";
// import { create } from "zustand";

// type State = {
//     photos: IPhotoType[],
//     loading?: boolean,
// }
// type Action = {
//     getPhotos: (params?: Record<string, any>) => void
// }

// export const useAdminStore = create<State & Action>((set) => ({
//     photos: [],
//     getPhotos: async (params = {}) => {
//         set({ loading: true });
//         const response: Record<string, any> = await queryImageList(params);

//     }


// }));



//export default useAdminStore

// type State = {
//     currentCategory: string | null;
// };

// type Action = {
//     setCurrentCategory: (category: string) => void;
// };

// const useAdminStore = create<State & Action>()((set, get) => ({
//     currentCategory: null,
//     setCurrentCategory: (category: string) => set({ currentCategory: category }),
// }));

// export default useAdminStore;