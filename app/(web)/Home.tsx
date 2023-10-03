import { Box } from '@mui/material';
import { categories } from '_constants';


export default async function Home() {

    const photos = [
        {
            src: 'http://example.com/example/img1.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'http://example.com/example/img2.jpg',
            width: 1,
            height: 1
        }
    ];

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
        <main className="pt-4
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
            border-b-2
            mb-5">

            {categories.map((item,index) => {
                const Icon = item.icon;
                return <Box
                    key={item.id}
                    className={`
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        gap-2
                        p-3
                        
                        hover:text-neutral-800
                        transition
                        cursor-pointer
                    `}
                >
                    <Icon size={28} />
                    <div className="font-medium text-sm">{item.tag}</div>

                </Box>;
            }


            )}

            {/* {isLoading && <div>loading.....</div>} */}

            {/* <ShowTags initData={initialData} /> */}


            {/* <Button variant="contained" onClick={testabc}>Hello world</Button> */}


            {/* <Gallery photos={photos} />; */}

        </main>
    );
}
