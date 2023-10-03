'use client';

import { getQueryClient } from "@/helpers/query/getQueryClient";
import alertService from "@/service/alertService";
import { GET_PHOTOS_KEY, getPhotos } from "@/service/photoService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IPhotoType } from "types";


function ShowTags({ initData }: { initData: any; }) {

    const queryClient = useQueryClient();
    const { data: photos, refetch, isLoading } = useQuery({
        queryKey: GET_PHOTOS_KEY,
        queryFn: getPhotos,
        initialData: initData
    });

    const alert = alertService();
    function testabc() {

        const newData = initData.slice(0, 3);

        queryClient.setQueryData(GET_PHOTOS_KEY, newData);

        alert.clear();
        let message = '保存成果了，请刷新页面吧';
        alert.success(message, true);
    }

    const clearMutation = useMutation({
        mutationFn: async () => { initData = []; },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: GET_PHOTOS_KEY }),
        onError: () => { alert.error('a'); }
    });



    if (isLoading) return <h1>Loading...</h1>;


    return (
        <div>
            <button
                onClick={() => {
                    clearMutation.mutate();
                }}
            >
                Clear All
            </button>
            {
                photos?.map((item: IPhotoType, i: any) => (<div key={i}><a href="#" onClick={testabc}>{item.city}</a></div>))
            }
        </div>
    );
}

export default ShowTags;