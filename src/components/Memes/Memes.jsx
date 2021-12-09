import React from 'react';
import { Meme } from './Meme/Meme';
import styles from './styles.module.css';
import { Routes,Route } from 'react-router-dom';
import { MemesGenerated } from './MemesGenerated/MemesGenerated';
import { Grid, Typography } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';

export const Memes = () => {
    
    return (
      <Grid className={styles.bdy}>
        <Navbar />
        <div style={{paddingTop:'40px'}}/>
        <Grid>
           <Typography variant="h2" style={{color:"white"}}>Meme Creator🤪</Typography>
        </Grid>
        <div style={{paddingTop:'25px'}}/>
        <Grid>
           <Routes>
              <Route exact path='/' element={<Meme />} />
              <Route path='/generated' element={<MemesGenerated />} />
           </Routes>
        </Grid>
        <div style={{paddingTop:'50px'}}/>
        <p style={{textAlign:"center",padding:"10px",color:"white"}}><em>...Only 100 templates are available...</em></p>
      </Grid>
    );
}

 
