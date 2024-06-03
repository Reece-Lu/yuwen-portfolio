import React from 'react';
import { Box, Typography } from '@mui/material';

const ComputerPricePrediction = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Data Processing and Prediction</Typography>
            <Typography variant="h6" gutterBottom>Data Crawling and Cleaning</Typography>
            <Typography variant="body1" paragraph>
                This section covers the process of data crawling and cleaning using Scrapy, as well as the implementation of prediction models using machine learning algorithms.
            </Typography>
        </Box>
    );
};

export default ComputerPricePrediction;
