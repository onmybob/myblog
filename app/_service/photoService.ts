import request from "@/helpers/client/request";
import { PhotoType } from "types";

/**
 * 根据查询条件查询photo
 * @param params 查询条件
 */
export function queryPhotoList(params: Record<string, any>) {
    return request.get('/api/index', params);
}
export const getPhotos = async () => {
    const data: PhotoType[] = [];
     const res: any = await request.get(`${process.env.SERVER_BASE_URL}/api/index`, { currentPage: 1 });
    //const res: any = await request.get(`/api/index`, { currentPage: 1 });
    console.log('photoService.....',res);

    for (let i = 0; i < res.data.data.length; i++) {
        const p = res.data.data[i];
        const photo: PhotoType = {
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

export const getPhotos4 = async () => {
    const data: PhotoType[] = [];
     const res: any = await request.get(`/api/index`, { currentPage: 1 });
    //const res: any = await request.get(`/api/index`, { currentPage: 1 });
    console.log('photoService.....',res);

    for (let i = 0; i < res.data.data.length; i++) {
        const p = res.data.data[i];
        const photo: PhotoType = {
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


export const getPhotos3 = async() => {
    const res = await request.get(`/api/index`, { currentPage: 1 })
    return res.data;
};


 export const getPhotos2 = async() => {
    const res = await request.get(`${process.env.SERVER_BASE_URL}/api/index`, { currentPage: 1 })
    return res.data;
};

export const hidePhoto = async (id: number) => await request.delete('/api/api/admin/deleteById', { id: id });
export const GET_PHOTOS_KEY = ["GET_PHOTOS"];