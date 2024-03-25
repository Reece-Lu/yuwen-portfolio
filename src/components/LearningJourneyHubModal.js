import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

function LearningJourneyHubModal({ open, onClose, projectData }) {
    // 定义跳转函数
    const handleButtonClick = () => {
        window.open('https://reece-lu.github.io/LearningJourneyHub/default-topic.html', '_blank');
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4
            }}>
                {projectData && (
                    <>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {projectData.projectName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {projectData.description}
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" style ={{width:'100%'}} onClick={handleButtonClick}>Explore</Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    );
}

export default LearningJourneyHubModal;
