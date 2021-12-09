import React from 'react';
import { Typography,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import useStyles from './styles';

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.bdy}>
            <div style={{padding:"30px"}}/>
            <Typography variant="h1">MJQ</Typography>
            <div style={{padding:"10px"}}/>
            <Typography variant="h4" className={classes.subheading}>Memes, Jokes & Quotes</Typography>
            <div style={{padding:"8px"}}/>
            <Typography variant="h5" className={classes.subheading}>Lets have fun !!!</Typography>
            <div style={{padding:"20px"}}/>
            <Stack
            spacing={3}
            alignItems="center"
            justifyContent="center"
            >
                <Button className={classes.btn} component={Link} to="/memes" variant="contained" size="large" >
                <p style={{fontWeight:"700"}}>Create Memes</p>
                <span style={{fontSize:"20px"}}>😉</span>
                </Button>
                <Button className={classes.btn} component={Link} to="/quotes" variant="contained" size="large" >
                <p style={{fontWeight:"700"}}>Generate Quotes</p>
                <span style={{fontSize:"20px"}}>😇</span>
                </Button>
                <Button className={classes.btn} component={Link} to="/jokes" variant="contained" size="large" >
                <p style={{fontWeight:"700"}}>Generate Jokes</p>
                <span style={{fontSize:"20px"}}>😂</span>
                </Button>
                <div style={{padding:"20px"}}/>
            </Stack>
        </div>
    ) 
}

export default LandingPage
