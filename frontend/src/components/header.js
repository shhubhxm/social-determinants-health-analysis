// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Social Determinants of Health
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/research">Research</Button>
                <Button color="inherit" component={Link} to="/map">Map</Button>
                <Button color="inherit" component={Link} to="/more-info">More Info</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
