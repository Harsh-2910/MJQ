import React,{ useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import { Button, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import useStyles from './styles';

export const MemesGenerated = () => {

    const [copied,setCopied] = useState(false);
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    const clipboard = useClipboard();

    const copyLink = () => {
       clipboard.copy(url);
       setCopied(true);
    };
 
    return (
     <div className={classes.container}>
         <div style={{paddingTop:"50px"}}/>
         <Typography variant="h2">Meme Creator🤪</Typography>
         <div style={{paddingTop:"25px"}}/>
         <Stack
         spacing={3}
         justifyContent="center"
         alignItems="center"
         >
            <Button className={classes.back} variant="contained" size="large" onClick={() => navigate('/memes')}>
            <strong>Make More Memes</strong>
            </Button>
            { url && <img src={url} alt="Meme created" /> }
            <Button className={classes.copy} variant="contained" size="large" onClick={copyLink}>
            <strong>{copied?'Link copied!':'Copy Link'}</strong>
            </Button>
            <div style={{paddingTop:"40px"}}/>
         </Stack>
     </div>
    );
};

