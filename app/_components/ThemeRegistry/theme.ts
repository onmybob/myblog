import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {

    },

    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButtonGroup: {
            defaultProps: {
                disableRipple: true,
            },
        },

    },
});

export default theme;