import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Education from './Education';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import DividerText from './DividerText';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: 'Merienda, cursive',
    },
});

function LeftPanel() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , marginLeft: '5%', marginRight: '2.5%' }}>
            <img src="/images/leftPanelPicture.jpeg" alt="Yuwen Lu" style={{ width: '90%', borderRadius: '5%', marginTop: '8%'}} />
            <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{marginTop:'3%', fontFamily: theme.typography.fontFamily}}>Yuwen Lu</Typography>
            </ThemeProvider>
            {/* Education and Experience Description */}
            <Typography variant="body2" style={{ marginTop: '3%', textAlign: 'center', fontFamily: theme.typography.fontFamily }}>
                M.Eng in Applied Data Science, U. of Victoria. Co-op at Ocean Networks Canada, focusing on software test automation.
            </Typography>
            <DividerText label='Education'/>
            <Education />
        </Box>
    );
}

export default LeftPanel;
