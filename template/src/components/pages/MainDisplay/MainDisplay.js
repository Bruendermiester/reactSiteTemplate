import React from 'react';
import Card from '../../Card/Card'
import Header from '../../Header/Header'
import { connect } from 'react-redux';
import './MainDisplay.css';

class MainDisplay extends React.Component {

    reanderCardList() {
        return this.props.articles.map((article) => {
            return <Card key={ article.id } article={article}/>
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="main_display">
                    { this.reanderCardList() }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { articles: state.articles };
}

export default connect(mapStateToProps)(MainDisplay);