import React from 'react';
import Card from '../../Card/Card'
import Header from '../../Header/Header'
import { connect } from 'react-redux';
import './MainDisplay.css';
import { updatePagination } from '../../../actions';
import Pagination from "react-js-pagination";

class MainDisplay extends React.Component {

    reanderCardList() {
        let pagDisplay = [];
        let articleSections = this.props.articles.map((article) => {
            return <Card key={ article.id } article={article}/>
        });
        var i,j,temparray,chunk = 10;
        for (i=0,j=articleSections.length; i<j; i+=chunk) {
            temparray = articleSections.slice(i,i+chunk);
            pagDisplay.push(temparray);
        }
        
        return pagDisplay[this.props.pageNum -1];
    }

    handlePageChange = (pageNumber) => {
        this.props.updatePagination(pageNumber);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="main_display">
                    { this.reanderCardList() }
                    <Pagination
                        hideDisabled
                        activePage={this.props.pageNum}
                        itemsCountPerPage={10}
                        totalItemsCount={this.props.articles.length}
                        onChange={this.handlePageChange}
                    />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { articles: state.articles, pageNum: state.pageNum };
}

export default connect(mapStateToProps, { updatePagination })(MainDisplay);