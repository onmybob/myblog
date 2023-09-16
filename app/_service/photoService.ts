import request from "@/helpers/client/request";
import { Photo } from "types";

/**
 * 根据查询条件查询photo
 * @param params 查询条件
 */
export function queryPhotoList(params: Record<string, any>) {
    return request.get('/api/index', params);
}
export const getPhotos = async () => {
    const data: Photo[] = [];
    const res: any = await request.get(`${process.env.SERVER_BASE_URL}/api/index`, { currentPage: 1 });
    console.log(res.data.data);

    for (let i = 0; i < res.data.data.length; i++) {
        const p = res.data.data[i];
        const photo: Photo = {
            city: p?.city,
            isDel: p?.isDel,
            id: p?.id,
            url: p?.url,
            AValue: p?.AValue,
            photoCountry: p?.photoCountry,
            srcImgURL: p?.srcImgURL,
        };
        data.push(photo);
    }
    return data;
};

export const hidePhoto = async (id: number) => {
    const res: any = await request.delete('/api/api/admin/deleteById', { id: id });
    console.log(res);

};
export const GET_PHOTOS_KEY = ["GET_PHOTOS"];