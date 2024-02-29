import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LeftPanel() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , marginLeft: '5%', marginRight: '2.5%' }}>
            <img src="/images/leftPanelPicture.jpeg" alt="Yuwen Lu" style={{ width: '90%', borderRadius: '5%', marginTop: '8%'}} />
            <Typography variant="h6" style={{marginTop:'3%'}}>Yuwen Lu</Typography>
        </Box>
    );
}

export default LeftPanel;
