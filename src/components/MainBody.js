import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MainBody() {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Introduction
                </Typography>
                {/* Content for Introduction */}
            </Box>

            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Working Experience
                </Typography>
                {/* Content for Working Experience */}
            </Box>

            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Projects
                </Typography>
                {/* Content for Projects */}
            </Box>

            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Activities
                </Typography>
                {/* Content for Activities */}
            </Box>

            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Utilities
                </Typography>
                {/* Content for Utilities */}
            </Box>
        </Container>
    );
}

export default MainBody;
