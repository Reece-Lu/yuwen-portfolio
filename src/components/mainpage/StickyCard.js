import React from 'react';
import './StickyCard.css';

// Generate an array of 20 notes
const notes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Card Title ${i + 1}`,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
}));

const StickyCard = () => {
    return (
        <div className="scrolling-container">
            <div className="sticky-cards-container">
                {notes.map((note, index) => (
                    <div
                        className="card"
                        key={note.id}
                        style={{
                            transform: `rotate(${index * 3}deg)`, // 根据你的需要调整旋转角度
                            top: `${index * 10}px`, // 调整每个卡片的顶部偏移
                            zIndex: index, // 修复重叠问题，使得后面的卡片重叠在前面的卡片之上
                        }}
                    >
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default StickyCard;
