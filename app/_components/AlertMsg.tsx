'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import alertService from '@/service/alertService';


export { AlertMsg };

function AlertMsg() {
    const pathname = usePathname();
    const service = alertService();
    const alert = service.alert;

    useEffect(() => {
        // clear alert on location change
        service.clear();
    }, [pathname]);

    if (!alert) return null;

    return (

        <Stack sx={{ position: 'absolute', bottom: '30px', left: '30px' }} spacing={2}>
            <Alert severity="error"> {alert.message}--{alert.type}</Alert>
        </Stack>



    );
}