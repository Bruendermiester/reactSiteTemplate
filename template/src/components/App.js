import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter, Route } from 'react-router-dom';
import MainDisplay from './pages/MainDisplay/MainDisplay';
import ArticleDisplay from './pages/Article/ArticleDisplay';
import BlogCreateDisplay from './pages/CreateBlog/BlogCreateDisplay';
import AboutUs from './pages/AboutUs/AboutUs';
import '../styles/Main.css';


class App extends React.Component {


    render() {
        return (
            <div>
                <BrowserRouter>
                    <div id="mobile_menu">
                        <Menu>
                            <a id="home" className="menu-item" href="/">Home</a>
                            <a id="create" className="menu-item" href="/create">Create</a>
                            <a id="about" className="menu-item" href="/aboutus">About</a>
                        </Menu>
                    </div>
                
                    <div id="desktop_menu">
                        <Route path="/" exact component={ MainDisplay }/>
                        <Route path="/article/:handle" exact component={ ArticleDisplay }/>
                        <Route path="/create" exact component={ BlogCreateDisplay }/>
                        <Route path="/edit/:handle" exact component={ BlogCreateDisplay }/>
                        <Route path="/aboutus" exact component={ AboutUs }/>
                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default App;
