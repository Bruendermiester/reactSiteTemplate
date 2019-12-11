import React from 'react';
import Header from '../Header'
import '../../styles/pages/ArticleDisplay.css';

class ArticleDisplay extends React.Component {
    render() {
        let article = this.props.location.state.article;
        // TODO: get article if not from home on state with ===> let handle = this.props.match.params;
        let backgroundImage = {
            backgroundImage: `url( ${article.images} )`
        };
        let formatedBody = article.body.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
        return (
            <div>
                <Header/>
                <div id="article_display">
                    <div className="main_image" style={ backgroundImage }></div>
                    <div className="article_title">
                        <h2> { article.title } </h2>
                    </div>
                    <div className="article_body">
                        <p> { formatedBody } </p>
                    </div>
                </div>
            </div>
        )}
}

export default ArticleDisplay;