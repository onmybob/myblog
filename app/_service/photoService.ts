import request from "@/helpers/client/request";
import { IPhotoType } from "types";

/**
 * 根据查询条件查询photo
 * @param params 查询条件
 */
export function queryPhotoList(params: Record<string, any>) {
    return request.get('/api/index', params);
}
export const getPhotos = async () => {
    const data: IPhotoType[] = [];
    const res: any = await request.get(`${process.env.SERVER_BASE_URL}/api/index`, { currentPage: 1 });
    //const res: any = await request.get(`/api/index`, { currentPage: 1 });
    console.log('photoService.....', res);

    for (let i = 0; i < res.data.data.length; i++) {
        const p = res.data.data[i];
        const photo: IPhotoType = {
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
    const data: IPhotoType[] = [];
    const res: any = await request.get(`/api/index`, { currentPage: 1 });
    //const res: any = await request.get(`/api/index`, { currentPage: 1 });
    console.log('photoService..getPhotos4...', res);

    for (let i = 0; i < res.data.data.length; i++) {
        const p = res.data.data[i];
        const photo: IPhotoType = {
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

export const getPhotosParamsServer = async (params: Record<string, any>) => {

    const res: any = await request.get(`https://www.bobjoy.com/api/index`, params);

    for (let i = 0; i < res.data.data.length; i++) {
        res.data.data[i].url = res.data.data[i].url;
        res.data.data[i].src = res.data.data[i].url;
        res.data.data[i].caption = 'test'
    }
     
    return res
};

export const adminSearchSubmission =async (prevState:any,formData:FormData) =>{
    const key = formData.get("key");
    console.log(key);
    return {};

}
export const getPhotosParams = async (params: Record<string, any>) => {

    console.log('params', params);
    debugger
    const data: IPhotoType[] = [];
    const res: any = await request.get(`/api/index`, params);

    for (let i = 0; i < res.data.data.length; i++) {
        res.data.data[i].url = res.data.data[i].url;
        res.data.data[i].src = res.data.data[i].url;

        res.data.data[i].caption = 'test'

    }
    // for (let i = 0; i < res.data.data.length; i++) {
    //     const p = res.data.data[i];
    //     const photo: IPhotoType = {
    //         city: p?.city,
    //         isDel: p?.isDel,
    //         id: p?.id,
    //         url: 'data:image/jpeg;base64,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',
    //         AValue: p?.AValue,
    //         photoCountry: p?.photoCountry,
    //         srcImgURL: p?.srcImgURL,
    //     };
    //     data.push(photo);
    // }
    // return data;

    return res
};



export const getPhotos3 = async () => {
    const res = await request.get(`/api/index`, { currentPage: 1 })
    return res.data;
};


export const getPhotos2 = async () => {
    const res = await request.get(`${process.env.SERVER_BASE_URL}/api/index`, { currentPage: 1 })
    return res.data;
};

export const hidePhoto = async (id: number) => await request.delete('/api/api/admin/deleteById', { id: id });
export const showPhoto = async (id: number) => await request.delete('/api/api/admin/showByIds', { id: id });

export const GET_PHOTOS_KEY = ["GET_PHOTOS"];