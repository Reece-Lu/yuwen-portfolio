import React, { useEffect } from 'react';
import { scroll } from 'framer-motion/dom';

function NoteDisplay() {
    useEffect(() => {
        const progressWheel = document.querySelector(".indicator");

        scroll((progress) => {
            progressWheel.style.strokeDasharray = `${progress}, 1`;
        }, {
            source: document.querySelector("ul"),
            axis: "x"
        });
    }, []);

    const notes = Array.from({ length: 16 }, (_, i) => ({
        id: i,
        name: `笔记${i + 1}`,
        imageUrl: "https://via.placeholder.com/150", // 使用占位图作为示例
        link: "#"
    }));

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
                height: '130px',
                overflowX: 'scroll',
                padding: '20px 0',
                flex: '0 0 90%',
            }}>
                {notes.map((note) => (
                    <li key={note.id} style={{
                        flex: '0 0 77.27px',
                        height: '100px',
                        background: '#ffffff',
                        margin: '0 5px',
                        borderRadius: '10px',
                        position: 'relative'
                    }}>
                        <a href={note.link} style={{ display: 'flex', height: '100%' }}>
                            <img src={note.imageUrl} alt={note.name} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
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
