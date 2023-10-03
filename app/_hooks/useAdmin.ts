import { getPhotosParams } from "@/service/photoService";
import { useQuery } from "@tanstack/react-query";
import { USEKEY_ADMIN_PHOTOS } from "./constant";

export const usePhotoQuery = (params: Record<string, any>) => {
    return useQuery([USEKEY_ADMIN_PHOTOS, params], async () => getPhotosParams(params));
}