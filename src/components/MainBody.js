import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel'


function MainBody() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} md={4.58}>
                    <LeftPanel />
                </Grid>
                <Grid item xs={12} md={7.42}>
                    <RightPanel />
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainBody;
