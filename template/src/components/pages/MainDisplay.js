import React from 'react';
import Card from '../Card'
import Header from '../Header'
import '../../styles/pages/MainDisplay.css';

class MainDisplay extends React.Component {
    render() {
        return (
            <div>
                <Header/>
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