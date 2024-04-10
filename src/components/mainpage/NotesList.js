// NotesList.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './NotesList.css'; // 确保你有对应的CSS文件

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, Arial, sans-serif',
    },
});

const notes = [
    { id: 1, title: "How to Deploy meetyuwen.com", content: "This guide outlines the steps to deploy updates to meetyuwen.com, ensuring that the website reflects the latest changes. ", url: "https://reece-lu.github.io/LearningJourneyHub/how-to-deploy-meetyuwen-com.html" },
    { id: 2, title: "Markdown Syntax Learning", content: "Note Content 2", url: "https://reece-lu.github.io/LearningJourneyHub/markdown.html" },
    // 你的笔记数据...
];

const cardVariants = {
    hover: {
        scale: 1.02,
        boxShadow: "0px 0px 8px rgba(0,0,0,0.2)"
    },
    initial: {
        scale: 1,
        boxShadow: "0px 0px 4px rgba(0,0,0,0.1)"
    }
};

const contentVariants = {
    hover: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.2, delay: 0.1 }
    },
    initial: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.2 }
    }
};

const NoteCard = ({ note }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.open(note.url, '_blank');
    };

    return (
        <motion.div
            className="note-card"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ background: 'white', borderRadius: '8px', padding: '16px', marginBottom: '8px', cursor: 'pointer' }}
        >
            <ThemeProvider theme={theme}>
                <h4>{note.title}</h4>
                <motion.div
                    variants={contentVariants}
                    animate={isHovered ? "hover" : "initial"}
                >
                    <p>{note.content}</p>
                </motion.div>
            </ThemeProvider>
        </motion.div>

    );
};

const NotesList = () => {
    return (
        <div className="notes-list-container">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    );
};

export default NotesList;
