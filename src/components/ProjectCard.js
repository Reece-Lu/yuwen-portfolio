import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/system';

export default function ProjectCard({ projectData }) { // 接受props参数
    return (
        <Card orientation="horizontal" variant="outlined" sx={{ width: '98%', marginTop: '8px' }}>
            <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: 109 }}>
                    <img
                        src={projectData.imageUrl}
                        loading="lazy"
                        alt={projectData.projectName}
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography fontWeight="md" textColor="success.plainColor">
                    {projectData.projectName}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography level="body-sm">{projectData.technologies}</Typography>
                    <Typography level="body-sm">{projectData.dateRange}</Typography>
                </Box>
                <Typography level="body2" sx={{ color: projectData.cardColor, fontSize: '14px' }}>
                    {projectData.description}
                </Typography>
            </CardContent>
            <CardOverflow
                variant="soft"
                color="primary"
                sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    justifyContent: 'center',
                    fontSize: 'xs',
                    fontWeight: 'xl',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                }}
            >
                {projectData.buttonText}
            </CardOverflow>
        </Card>
    );
}
