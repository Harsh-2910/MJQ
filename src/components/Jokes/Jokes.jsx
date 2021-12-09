import React,{ useState,useEffect } from 'react';
import './Jokes.css';
import { Typography,Button } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';

const API_URL = `https://api.chucknorris.io/jokes/random`;

function Jokes() {
    const [joke, setJoke] = useState('');
    
    const generateJoke = () =>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data.value));
    }

    useEffect(() => {
        generateJoke();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="container"> 
                <div className="box">
                <Typography variant="h4">Jokes Generator</Typography>
                <p dangerouslySetInnerHTML={{__html: joke}} />
                <Button size="medium" variant="contained" onClick={generateJoke}>Get new joke 😂😆</Button>
                </div>
            </div>
            <Typography style={{textAlign:"center",padding:"10px",backgroundColor:'#344CB7',color:"white"}} variant="subtitle2">
            Chuck Norris👦 is a Character here,you can replace it with your friends' name and have fun
            </Typography>
            <p style={{textAlign:"center",padding:"10px",backgroundColor:'#344CB7',color:"white"}}><em>These jokes are fetched from an API so if anything hurts anyone's feeling please forgive</em></p>
        </div>
    );
}

export default Jokes
