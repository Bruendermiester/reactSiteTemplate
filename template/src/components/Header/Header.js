import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header_links">
                    <div className="link"><Link to="/">Home</Link></div>
                    <div className="link"><Link to="/create">Create</Link></div>
                    <div className="link"><Link to="/aboutus">About</Link></div>
                </div>
            </header>
        )}
}

export default Header;