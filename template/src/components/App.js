import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainDisplay from './pages/MainDisplay/MainDisplay'
import ArticleDisplay from './pages/Article/ArticleDisplay'
import BlogCreateDisplay from './pages/CreateBlog/BlogCreateDisplay'
import AboutUs from './pages/AboutUs/AboutUs'
import '../styles/Main.css';


class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={ MainDisplay }/>
                        <Route path="/article/:handle" exact component={ ArticleDisplay }/>
                        <Route path="/create" exact component={ BlogCreateDisplay }/>
                        <Route path="/aboutus" exact component={ AboutUs }/>
                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default App;
