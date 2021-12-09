import React,{ useState,useEffect } from 'react';
import Quote from './Quote/Quote';
import { Button,Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import { Twitter } from '@material-ui/icons';
import useStyles from './style';
import Navbar from '../Navbar/Navbar';


const Quotes = () => {
  const classes = useStyles();
  const [quote,setQuote] = useState({
    author: null,
    text: null
  });

  const fetchQuote = async () => {
    return await fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random()*data.length);
      setQuote(data[randomNumber]);
    });
  }

  useEffect(()=>{
    fetchQuote();
  }, [])

    return (
      <div style={{backgroundColor:"#FFFD95"}}>
        <Navbar />
        <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{
          fontFamily:['Fira Sans','sans-serif'].join(','),
          minHeight:"100vh",
        }}
        >
          <div styles={{paddingTop:"25px"}} />
          <Typography variant="h2" style={{color:"black"}}>Quotes Generator</Typography>
          <Quote quote={quote}/>
          <Stack spacing={3}>
            <Button 
            variant="contained" 
            size="large" 
            startIcon={<Twitter/>}
            href={`https://twitter.com/intent/tweet?text=${quote.text}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
            borderRadius:"40px",
            backgroundColor:'#9C19E0',
            fontWeight:"700",
            }}
            className={classes.btn}
            >
            Tweet 
            </Button>
            <Button variant="contained" size="large" onClick={fetchQuote} style={{
            borderRadius:"40px",
            backgroundColor:'#9C19E0',
            fontWeight:"700",
            }}
            className={classes.btn}
            >
            Generate new quote
            </Button>
          </Stack>
        </Stack>
        <div style={{paddingTop:"40px"}}/>
      </div>
    );
}
export default Quotes