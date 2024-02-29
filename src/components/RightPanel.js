import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LeftPanel() {
    return (
        <Box sx={{ marginLeft: '2.5%', marginRight: '5%' }}>
            <Typography variant="h6" style={{marginTop:'3%'}}>Github Contributions Chart</Typography>
            <img src="https://ghchart.rshah.org/Reece-Lu" alt="Yuwen Lu's Github Contribution chart" />
        </Box>
    );
}

export default LeftPanel;
