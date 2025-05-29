import React, { useState, useRef } from 'react';

export const Velement = ({videolink}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full">
            <video 
                className="rounded-xl w-full" 
                src={videolink} 
                ref={videoRef}
                controls={false}
                onEnded={() => setIsPlaying(false)}
            >
            </video>
            <div 
                className={`absolute top-0 left-0 w-full h-full ${
                    isPlaying ? 'bg-opacity-0' : 'bg-black bg-opacity-0'
                } rounded-xl flex justify-center items-center transition-all duration-300 cursor-pointer`}
                onClick={handlePlayClick}
            >
                {!isPlaying && (
                    <div className="w-24 h-24 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                        <svg 
                            className="w-16 h-16 text-black ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};