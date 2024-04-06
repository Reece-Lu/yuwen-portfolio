import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Education from './Education';
import DividerText from '../DividerText';
import WorkingExperience from './WorkingExperience';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, Arial, sans-serif',
    },
});

function RightPanel() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ fontFamily: theme.typography.fontFamily, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ marginLeft: '2.5%', marginRight: '5%', marginTop:'0rem'}}>
                    <DividerText label='Education'/>
                    <Education />
                    <DividerText label='Working Experience'/>
                    <WorkingExperience />
                    <DividerText label='Github Contributions'/>
                    <img src="https://ghchart.rshah.org/Reece-Lu" alt="Yuwen Lu's Github Contribution chart" style={{ width: '100%', height: 'auto', marginTop: '3%', marginBottom: '3%'}}/>
                    <Divider flexItem sx={{ width: '100%', marginTop: 3, marginBottom:3}}/>
                </Box>
            </Box>
        </ThemeProvider>

    );
}

export default RightPanel;
