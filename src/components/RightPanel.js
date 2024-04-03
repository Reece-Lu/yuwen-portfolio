import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Education from './Education';
import DividerText from './DividerText';

function RightPanel() {
    return (
        <Box sx={{ marginLeft: '2.5%', marginRight: '5%', marginTop:'5%'}}>
            <DividerText label='Github Contributions'/>
            <img src="https://ghchart.rshah.org/Reece-Lu" alt="Yuwen Lu's Github Contribution chart" />
            <DividerText label='Education'/>
            <Education />
            <Divider flexItem sx={{ width: '100%', marginTop: 3, marginBottom:3}}/>
        </Box>
    );
}

export default RightPanel;
