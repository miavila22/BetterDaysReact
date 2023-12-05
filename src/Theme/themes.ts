import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography:{
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    },
    palette:{
        primary: {
            main: '#00000'
        },
        secondary: {
            main:'#12345',
            light:'#12345'
        },
        info: {
            main: '#000000'
        }
    }
})