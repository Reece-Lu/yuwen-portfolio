import React, { useEffect, useState } from 'react';
import { scroll } from 'framer-motion/dom';
import { fetchAllNotes, getNoteImage } from '../../api/NoteDisplayApi';
import config from '../../config/config.json';

function NoteDisplay() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const loadNotes = async () => {
            try {
                const data = await fetchAllNotes();
                const formattedNotes = data.map(note => ({
                    id: note.noteid,
                    name: note.notename,
                    imageUrl: getNoteImage(note.notecovername),
                    link: `${config.learningJourneyHubRoot}${note.noteurl}`
                }));
                setNotes(formattedNotes);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        loadNotes();

        const progressWheel = document.querySelector(".indicator");

        scroll((progress) => {
            progressWheel.style.strokeDasharray = `${progress}, 1`;
        }, {
            source: document.querySelector("ul"),
            axis: "x"
        });
    }, []);

    return (
        <div style={{
            letterSpacing: '-0.3px',
            borderRadius: '15px',
            display: 'flex',
            backgroundColor: '#FF0266',
            color: 'black',
            paddingLeft: '5px',
            paddingRight: '20px',
        }}>
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100" style={{
                top: '20px',
                left: '20px',
                transform: 'rotate(-90deg)'
            }}>
                <circle cx="50" cy="50" r="30" pathLength="1" style={{
                    stroke: '#ffffff',
                    opacity: 0.3,
                    strokeDashoffset: 0,
                    strokeWidth: '15%',
                    fill: 'none'
                }} />
                <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" style={{
                    stroke: '#ffffff',
                    strokeDashoffset: 0,
                    strokeWidth: '15%',
                    fill: 'none'
                }} />
            </svg>
            <ul style={{
                alignItems: 'center',
                display: 'flex',
                listStyle: 'none',
                height: '150px',
                overflowX: 'scroll',
                padding: '10px 0',
                flex: '0 0 90%',
            }}>
                {notes.map((note) => (
                    <li key={note.id} style={{
                        flex: '0 0 100.5px',
                        height: '130px',
                        background: '#ffffff',
                        margin: '0 5px',
                        borderRadius: '10px',
                        position: 'relative',
                        padding: '5px',
                    }}>
                        <a href={note.link} style={{ display: 'flex', height: '100%' }}>
                            <img src={note.imageUrl} alt={note.name} style={{ width: '100.5px', height: '130px', borderRadius: '10px' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                width: '100%',
                                textAlign: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                visibility: 'hidden'
                            }}>
                                {note.name}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoteDisplay;
