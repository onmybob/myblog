import { GET_PHOTOS_KEY, getPhotos4 } from "@/service/photoService";
import { useQuery } from "@tanstack/react-query";

export const useAdminPohoto = () => {
    return useQuery([GET_PHOTOS_KEY], () => getPhotos4);
}