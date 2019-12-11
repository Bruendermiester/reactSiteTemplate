import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

class Card extends React.Component {
    render() {
        
        let backgroundImage = {
            backgroundImage: `url( ${this.props.article.images} )`
        };

        return (
            <Link to={{
                pathname: `article/${this.props.article.id}`,
                state: {
                    article: this.props.article
                }
                }}>
                <div className="card_wrapper" >
                    <div className="card_image" style={ backgroundImage }></div>
                    <div className="card_text">
                        <p>{ this.props.article.title }</p>
                    </div>
                </div>
            </Link>
        )}
}

export default Card;