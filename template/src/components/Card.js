import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

class Card extends React.Component {
    render() {
        let backgroundImage = {
            backgroundImage: "url('/assets/testImage.png')"
        };

        return (
            <Link to="article">
                <div className="card_wrapper">
                    <div className="card_image" style={backgroundImage}></div>
                    <div className="card_text">
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.</p>
                    </div>
                </div>
            </Link>
        )}
}

export default Card;