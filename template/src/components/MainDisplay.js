import React from 'react';
import Card from './Card'
import '../styles/MainDisplay.css';

class MainDisplay extends React.Component {
    render() {
        return (
            <div>
                <div className="main_display">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        )}
}

export default MainDisplay;