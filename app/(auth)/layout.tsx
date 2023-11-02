'use client';

import { Avatar, Box, Button, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Image from 'next/image';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

  

const drawerWidth = 0;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <Box sx={{ display: 'flex' }} >
            <AppBar position="fixed" elevation={0} className=' border-b'>
                <Toolbar className='bg-white text-black'>
                    <Grid container spacing={3}>
                        <Grid item xs textAlign={'left'}>
                            <IconButton
                                color="inherit"
                                edge="start"
                            >
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} textAlign={'center'} >
                            <Box className='h-full flex items-center justify-center'>

                                <MenuList>
                                    <Link href="/admin/dashboard" color="inherit" underline="none" className=' float-left'>
                                        <MenuItem  >

                                            <ListItemIcon>
                                                <DashboardIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography variant="inherit">
                                                控制台
                                            </Typography>

                                        </MenuItem>
                                    </Link>
                                    <Link href="/admin/photo" color="inherit" underline="none" className=' float-left'>
                                        <MenuItem>
                                            <ListItemIcon>
                                                <PhotoLibraryIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography variant="inherit">
                                                照片管理
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                </MenuList>


                            </Box>
                        </Grid>
                        <Grid item xs textAlign={'right'}>
                            <Box className='h-full flex justify-end items-center justify-right '>
                                <Link href="#" color="inherit" underline="hover">退出</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
