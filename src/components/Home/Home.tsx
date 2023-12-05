import * as _React from 'react';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

//internal import
import shopImage from '../../assets/images/Change.jpg'
import { NavBar } from '../sharedComponents';

interface Props{
    title:string
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Main = styled('main') ({
    backgroundImage:`linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${shopImage})`,
    width: '100%',
    height:'100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top 5px',
    position: 'absolute',
    // marginTop: '1px'

})

const MainText = styled('div') ({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black'
})

export const Home = (props:Props) => {
    return (
        <Root>
            <NavBar />
            <Main>
                <MainText>
                    <Typography variant="h3"> { props.title }</Typography>
                    <Button sx={{marginTop: '10px'}} component={Link} to={"/shop"} variant='contained'>Come on in!</Button>
                </MainText>
            </Main>
        </Root>
    )
}