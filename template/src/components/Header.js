import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header_links">
                    <div className="link"><Link to="/">Home</Link></div>
                    <div className="link">Articles</div>
                    <div className="link">About Us</div>
                </div>
            </header>
        )}
}

export default Header;