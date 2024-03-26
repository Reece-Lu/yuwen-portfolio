import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                {/*<Tabs textColor="inherit">*/}
                {/*    <Tab label="Home" />*/}
                {/*    <Tab label="Working Experience" />*/}
                {/*    <Tab label="Projects" />*/}
                {/*    <Tab label="Activities" />*/}
                {/*    <Tab label="Kits" />*/}
                {/*</Tabs>*/}
                <Button color="inherit" component={RouterLink} to="/openapi">
                    OpenAPI
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
