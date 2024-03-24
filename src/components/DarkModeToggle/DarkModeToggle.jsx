import React, { useState } from 'react';
import './DarkModeToggle.css'; // Import CSS file for styling

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`dark-mode-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <button className="toggle-button" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default DarkModeToggle;
