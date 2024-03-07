import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ProjectCard from './ProjectCard';

function RightPanel() {

    const projectDataList = [
        {
            imageUrl: "/images/quantum_speed_up.gif",
            projectName: "Quantum Machine Learning",
            technologies: "FastAPI, Qiskit, CNN",
            dateRange: "01/2023-04/2023",
            description: "Implemented a Quantum CNN for image classification...",
            buttonText: "Let's Go",
            cardColor: "#11477B"
        },
        {
            imageUrl: "/images/house.webp",
            projectName: "Property Management System",
            technologies: "Spring Boot, Vue, MySQL,....",
            dateRange: "01/2022-06/2022",
            description: "Developed a full-stack property management system...",
            buttonText: "Let's Go",
            cardColor: "#11477B"
        }
    ];

    return (
        <Box sx={{ marginLeft: '2.5%', marginRight: '5%' }}>
            <Typography variant="h6" style={{marginTop:'3%'}}>Github Contributions Chart</Typography>
            <img src="https://ghchart.rshah.org/Reece-Lu" alt="Yuwen Lu's Github Contribution chart" />
            <Divider flexItem sx={{ width: '100%', marginTop: 3, marginBottom:3}}/>
            <Typography variant="h6" style={{marginTop:'3%'}}>Projects</Typography>
            {projectDataList.map((data, index) => (
                <ProjectCard key={index} projectData={data} />
            ))}
        </Box>
    );
}

export default RightPanel;
