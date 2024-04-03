import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
import Projects from './Projects';


function MainBody() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="stretch">
                {/* Left Panel */}
                <Grid item xs={12} md={4.58}>
                    <LeftPanel />
                </Grid>
                {/* Right Panel */}
                <Grid item xs={12} md={7.42}>
                    <RightPanel />
                </Grid>
                {/* Projects Section - spans the entire container width */}
                <Grid item xs={12}>
                    <Projects />
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainBody;
