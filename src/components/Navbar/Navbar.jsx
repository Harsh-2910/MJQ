import React from 'react';
import { Box } from '@mui/system';
import { Toolbar,IconButton,Typography,AppBar } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar variant="dense">
          <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Home />
          </IconButton>
          <Typography  variant="h6" color="inherit" component="div">
            MJQ
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}