import React, { useEffect,useState } from 'react';
import details from '../../../LoginDetails/login';
import jetha  from '../../../Images/jetha.jpg';
import { Typography,Button,TextField, Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import useStyles from './styles';
import { ArrowForwardIosRounded,ArrowForward,ArrowBack } from '@material-ui/icons';

export const Meme = () => {

    const [memes,setMemes] = useState([]);
    const [memeIndex,setMemeIndex] = useState(0);
    const [captions,setCaptions]= useState([]);
    const classes = useStyles();

    const navigate = useNavigate();

    const updateCaption = (e,index) => {
      const text = e.target.value || '';
      setCaptions(
          captions.map((c,i) => {
            if(i===index){
              return text;
            }
            else{
                return c;
            }
          })
      );
    };

    const generateMeme = () => {
      const currentMeme = memes[memeIndex];
      const formData = new FormData();

      //for hiding password I created new file and imported details
      // login.js 
      //__________________________
      // const details = {
      //   username:'******',
      //   password:'*******',
      // };
      // export default details;

      formData.append('username',details.username);
      formData.append('password',details.password); 
      formData.append('template_id',currentMeme.id);
      captions.forEach((c, index) => formData.append(`boxes[${index}][text]`,c));

      fetch('https://api.imgflip.com/caption_image',{
        method: 'POST',
        body: formData
      }).then(res => {
        res.json().then(res => {
          navigate(`/memes/generated?url=${res.data.url}`)
        });
      });
      
    };

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => {res.json().then(res=> {
          const memes = res.data.memes;
          setMemes(memes);
         });
        });
    }, []);

    useEffect(() => {
       if(memes.length && (memeIndex>-1 && memeIndex<100)){
         setCaptions(Array(memes[memeIndex].box_count).fill(''));
       }
    },[memeIndex,memes]);

    return (
      
      memes.length ? 
      <div >
          
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            
            <Stack
            spacing={1}
            alignItems="center"
            justifyContent="center"
            direction="row"
            >
              <Paper component="form">
                <TextField
                  className={classes.textbox}
                  id="input" 
                  size="small"
                  variant="outlined"
                  autoComplete="off"
                  placeholder="Go to template number :"
                />
              </Paper>

              <Button variant="contained" onClick={()=>setMemeIndex(document.getElementById('input').value-1)} aria-label="Go" size="small" className={classes.goIcon} startIcon={<ArrowForwardIosRounded/>} />
            </Stack>

            <Button className={classes.btn} size="large" type="button" variant="contained" onClick={()=>setMemeIndex(memeIndex+1)} endIcon={<ArrowForward/>}>
            Next Template
            </Button>

            <Typography variant="h5" style={{color:"white",fontFamily:'Handland One'}}>{`Template Number : ${memeIndex+1}`}</Typography>

            <Button className={classes.btn} size="large" type="button" variant="contained" onClick={()=>setMemeIndex(memeIndex-1)} startIcon={<ArrowBack/>}>
            Previous Template
            </Button>
            
          </Stack>
          <img src={(memeIndex>-1 && memeIndex<100)?memes[memeIndex].url:jetha} alt="meme"/>
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {
              captions.map((c,index) => (
                <input onChange={(e)=>updateCaption(e,index)} spellCheck="false" key={index} placeholder={`Enter Caption ${index+1}`} className={classes.captionbox}/>
              ))
            }
            <Button size="large" type="button" variant="contained" onClick={generateMeme} className={classes.createbtn}>
            Create
            </Button>
          </Stack>
      </div> 
      :
      <></>
    );
};
