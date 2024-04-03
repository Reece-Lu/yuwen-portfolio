import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ProjectCard from './ProjectCard';
import Modal from '@mui/material/Modal';
import { CardContent } from '@mui/joy';
import LearningJourneyHubModal from './LearningJourneyHubModal';
import Education from './Education';
import DividerText from './DividerText';



function RightPanel() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLearningJourneyHub, setIsLearningJourneyHub] = useState(false);

    const handleOpen = (data) => {
        setSelectedProject(data);
        setOpen(true);
        setIsLearningJourneyHub(data.projectName === "LearningJourneyHub");
    };

    const handleClose = () => setOpen(false);

    const projectDataList = [
        {
            imageUrl: "/images/quantum_speed_up.gif",
            projectName: "Quantum Machine Learning",
            technologies: "FastAPI, Qiskit, CNN",
            dateRange: "01/2023-04/2023",
            description: "Implemented a Quantum CNN for image classification...",
            cardColor: "#11477B"
        },
        {
            imageUrl: "/images/house.webp",
            projectName: "Property Management System",
            technologies: "Spring Boot, Vue, MySQL,....",
            dateRange: "01/2022-06/2022",
            description: "Developed a full-stack property management system...",
            cardColor: "#11477B"
        },
        {
            imageUrl: "/images/book.png",
            projectName: "LearningJourneyHub",
            technologies: "MarkDown, GitHub Action",
            dateRange: "01/2021-current",
            description: "Created a GitHub repository to record my learning journey...",
            cardColor: "#11477B"
        }
    ];

    return (
        <Box sx={{ marginLeft: '2.5%', marginRight: '5%' }}>
            <DividerText label='Github Contributions'/>
            <img src="https://ghchart.rshah.org/Reece-Lu" alt="Yuwen Lu's Github Contribution chart" />
            <DividerText label='Education'/>
            <Education />
            <Divider flexItem sx={{ width: '100%', marginTop: 3, marginBottom:3}}/>
            <Typography variant="h6" style={{marginTop:'3%'}}>Projects</Typography>
            {projectDataList.map((data, index) => (
                <ProjectCard key={index} projectData={data} onCardClick={handleOpen} />
            ))}
            {isLearningJourneyHub ? (
                <LearningJourneyHubModal
                    open={open}
                    onClose={handleClose}
                    projectData={selectedProject}
                />
            ) : (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                        {selectedProject && (
                            <CardContent>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {selectedProject.projectName}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {selectedProject.description}
                                </Typography>
                            </CardContent>
                        )}
                    </Box>
                </Modal>
            )}
        </Box>
    );
}

export default RightPanel;
