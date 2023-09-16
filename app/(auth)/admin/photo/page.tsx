import PhotoItem from '@/components/Admin/PhotoItem';
import { getPhotos } from '@/service/photoService';
import { Box, Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Photo } from 'types';
import { BorderAll } from '@mui/icons-material';
import PhotoToolbar from '@/components/Admin/PhotoToolbar';

async function Photo() {
    const initialData = await getPhotos();

    return (
        <Box>
            <PhotoToolbar />
            <PhotoItem list={initialData} />
        </Box>
    );
}

export default Photo;