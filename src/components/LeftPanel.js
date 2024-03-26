import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            {/*education Background*/}
            <Box sx={{ m: 1.5 }}>
                <Typography variant="h5" gutterBottom component="div">
                    Education
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Master of Engineering in Applied Data Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    University of Victoria, Canada — Sep 2022 to Aug 2023
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Bachelor of Software Engineering
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Beijing Union University, China — Sep 2018 to Jul 2022
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Exchange Program in Computer Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    University of Science and Technology Beijing — Sep 2020 to Jan 2021
                </Typography>
            </Box>

        </Box>
    );
}

export default LeftPanel;
