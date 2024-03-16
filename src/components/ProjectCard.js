import * as React from 'react';
import { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/system';

export default function ProjectCard({ projectData, onCardClick }) {
    const [raised, setRaised] = useState(false);

    return (
        <Card
            orientation="horizontal"
            variant="outlined"
            sx={{
                width: '98%',
                marginTop: '8px',
                transition: 'transform 0.3s ease-in-out',
                transform: raised ? 'scale(1.05)' : 'scale(1)',
                '&:hover': {
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                },
            }}
            onMouseOver={() => setRaised(true)}
            onMouseOut={() => setRaised(false)}
            onClick={() => onCardClick(projectData)}
        >
            <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: 109 }}>
                    <img src={projectData.imageUrl} loading="lazy" alt={projectData.projectName} />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography fontWeight="md" textColor="success.plainColor">{projectData.projectName}</Typography>
                    <Typography level="body-sm">{projectData.dateRange}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography level="body-sm">{projectData.technologies}</Typography>
                </Box>
                <Typography level="body2" sx={{ color: projectData.cardColor, fontSize: '14px' }}>
                    {projectData.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
