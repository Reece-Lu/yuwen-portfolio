import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <AppBar position="static" sx={{
            height: '2.5rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 1rem',
            marginBottom: '1rem',
        }}>
            <Typography variant="h6" sx={{ lineHeight: '2.5rem' }}>
                meetyuwen.com
            </Typography>
            <Button
                color="inherit"
                component={RouterLink}
                to="/openapi"
                sx={{ height: '2rem', lineHeight: '2rem', padding: '0 1rem' }} // Adjust padding as needed
            >
                Project APIs
            </Button>
        </AppBar>
    );
}

export default NavigationBar;
