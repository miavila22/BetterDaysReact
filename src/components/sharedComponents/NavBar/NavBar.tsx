import * as _React from 'react'
import { useState } from 'react'

import{
    Button,
    Drawer,
    ListItemButton,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Stack,
    Typography,
    Divider,
    CssBaseline,
    Box 
} from '@mui/material';

import { useNavigate } from'react-router-dom'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import { signOut, getAuth } from 'firebase/auth'; 

//internal imports 
import { theme } from '../../../Theme/themes'


const drawerWidth = 200;

const navStyles = {
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing:theme.transitions.easing.sharp, 
            duration: theme.transitions.duration.leavingScreen
        })
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },

    menuButton: {
        marginRight: theme.spacing(2)

    },
    hide: {
        display: 'none'
    },
    drawer:{
        width: drawerWidth,
        flexShrink:0

    },
    drawerPaper: {
        width:drawerWidth

    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',

    },
    toolbar:{
        display: 'flex'

    },
    toolbarButton: {
        marginLeft: 'auto',
        color: theme.palette.primary.contrastText
    },
    signInStack:{
        position: 'absolute',
        top: '20%',
        right: '50px'

    }

}

export const NavBar = () => {
    const [ open, setOpen ]= useState(false)
    const navigate = useNavigate();
    const myAuth = localStorage.getItem('auth') 
    const auth = getAuth(); 

     // 2 functions to help us set our hook
     const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    // list of dictionary/object for our NavLinks

    const navLinks = [
        {
            text: 'Home',
            icon: <LocalHospitalIcon/>,
            onClick: () => navigate('/')
        },
        {
            text: myAuth === 'true' ? 'Shop' : 'Sign In',
            icon: myAuth === 'true' ? <LibraryBooksIcon /> : <SpaIcon />,
            onClick: () => navigate(myAuth === 'true' ? '/shop' : 'auth')
        },
        {
            text: myAuth === 'true' ? 'Cart' : '',
            icon: myAuth === 'true' ? <HealthAndSafetyIcon /> : "",
            onClick: myAuth === 'true' ? () => navigate('/cart') : () => {}
        }
    ]


    let signInText = 'Sign In'
       
    if (myAuth === 'true') { 
         signInText = 'Sign Out'

    }

    const signInButton = async () => {
        if (myAuth === 'false') {
            navigate('/auth')
        } else {
            await signOut(auth)
            localStorage.setItem('auth', 'false')
            localStorage.setItem('user', '')
            localStorage.setItem('uuid', '')
            navigate('/')
        }
    }



    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar 
                sx={ open ? navStyles.appBarShift : navStyles.appBar }
                position = 'fixed'
            >
                <Toolbar sx={ navStyles.toolbar }>
                    <IconButton 
                        color='success'
                        aria-label='open drawer'
                        onClick = { handleDrawerOpen }
                        edge='start'
                        sx = { open ? navStyles.hide : navStyles.menuButton } 
                    >
                        <PsychologyIcon />
                    </IconButton>
                </Toolbar>
                <Stack 
                    direction='row' 
                    justifyContent='space-between' 
                    alignItems='center'
                    sx = { navStyles.signInStack} >
                        <Typography variant='body2' sx={{color: 'black'}}>
                            We're Rooting For You
                        </Typography>
                        <Button 
                            variant='contained'
                            color = 'info'
                            size = 'large'
                            sx = {{ marginLeft: '20px'}}
                            onClick = {signInButton}
                        >
                            { signInText }
                        </Button>
                    </Stack>
            </AppBar>
            <Drawer
                sx={ open ? navStyles.drawer : navStyles.hide }
                variant = 'persistent'
                anchor = 'left' 
                open = {open} //either true or false 
            >
                <Box sx = {navStyles.drawerHeader }>
                    <IconButton onClick={handleDrawerClose}>
                        <PsychologyIcon  />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    { navLinks.map( (item) => {
                        // using variable deconstruction to deconstruct our object/dictionary
                        const { text, icon, onClick } = item; 
                        return (
                            <ListItemButton key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                                { icon }
                            </ListItemButton>
                        )

                    })}
                </List>
            </Drawer>
        </Box>
    )
}

