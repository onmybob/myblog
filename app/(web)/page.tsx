
import ShowTags from '@/components/Gallery/ShowTags';
import { getQueryClient } from '@/helpers/query/getQueryClient';
import alertService from '@/service/alertService';
import { GET_PHOTOS_KEY, getPhotos, queryPhotoList } from '@/service/photoService';
import Button from '@mui/material/Button';
import { Hydrate, dehydrate, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default async function Home() {

  // const queryClient = getQueryClient();

  // await queryClient.prefetchQuery(GET_PHOTOS_KEY, getPhotos);
  // const dehydratedState = dehydrate(queryClient);

  //const initialData = await getPhotos();

  //const { data } = await axios.get("https://www.bobjoy.com/api/index?currentPage=1");

  // const { data, isLoading, isError } = queryPhotoList({ currentPage: 1 });
  // const s = data?.data.data;
  // console.log(s);
  // const alert = alertService();

  function testabc() {
    // alert.clear();
    // let message = '保存成果了，请刷新页面吧';
    // alert.success(message, true);

  }

  return (
    <main className="flex">
      <h1 >asdfs</h1>
      {/* {isLoading && <div>loading.....</div>} */}

      {/* <ShowTags initData={initialData} /> */}


      {/* <Button variant="contained" onClick={testabc}>Hello world</Button> */}
    </main>
  );
}
