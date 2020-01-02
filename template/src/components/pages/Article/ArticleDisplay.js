import React from 'react';
import Header from '../../Header/Header';
import DisplayImage from './DisplayImage';
import DisplayText from './DisplayText';
import { Link } from 'react-router-dom';
import './ArticleDisplay.css';

class ArticleDisplay extends React.Component {
    render() {
        let article = this.props.location.state.article;
        // TODO: get article if not from home on state with ===> let handle = this.props.match.params;
        let backgroundImage = {
            backgroundImage: `url( ${article.heroImage.src} )`
        };
        let articleContent = article.content;
        return (
            <div>
                <Header/>
                <div id="article_display">
                    <Link to={"/edit/" + article.id}>Edit</Link>
                    <div className="main_image" style={ backgroundImage }></div>
                    {articleContent.map((content, index) => {
                        return (
                            <div key={index}>
                                {content.type === 'text' ? <DisplayText index={index} content={content}/> : <DisplayImage index={index} content={content}/>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )}
}

export default ArticleDisplay;