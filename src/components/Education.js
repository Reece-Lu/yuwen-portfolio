import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import '../assets/fonts/Nunito/fonts.css';
// Import your images
import masterIcon from '../assets/master-icon.png';
import bachelorIcon from '../assets/coder.png';
import exchangeIcon from '../assets/computer.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, Arial, sans-serif',
    },
});

const EducationItem = ({ degree, imageName, institution, dateRange, details }) => {
    let iconSrc;
    switch(imageName) {
        case 'master':
            iconSrc = masterIcon;
            break;
        case 'bachelor':
            iconSrc = bachelorIcon;
            break;
        case 'exchange':
            iconSrc = exchangeIcon;
            break;
        default:
            iconSrc = '';
    }

    return (
        <Box sx={{ fontFamily: theme.typography.fontFamily, display: 'flex', flexDirection: 'column' }}>
            <Box>
                <Typography variant="body2" component="h3" gutterBottom sx={{ fontSize: '0.875rem', mt:'0.2rem' }} >
                    {iconSrc && (
                        <Box component="img" src={iconSrc} alt={degree + " icon"}
                             sx={{ width: 'auto', height: '1rem', mr: 0.5 }} />
                    )}
                    {degree}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 3 }}>
                    {institution}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    {dateRange}
                </Typography>
            </Box>
        </Box>
    );

};

const Education = () => {
    const educationHistory = [
        {
            degree: "Master of Engineering in Applied Data Science",
            imageName: 'master',
            institution: "University of Victoria, Canada",
            dateRange: "Sep 2022 - Aug 2023",
        },
        {
            degree: "Bachelor of Software Engineering",
            imageName: 'bachelor',
            institution: "Beijing Union University, China",
            dateRange: "Sep 2018 - Jul 2022"
        },
        {
            degree: "Exchange Program in Computer Science",
            imageName: 'exchange',
            institution: "University of Science and Technology Beijing, China",
            dateRange: "Sep 2020 - Jan 2021"
        },
    ];

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', marginTop:'1%'}}>
            {educationHistory.map((edu, index) => (
                <EducationItem key={index} {...edu} />
            ))}
        </Box>
    );
};

export default Education;
