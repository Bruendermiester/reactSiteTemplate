import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainDisplay from './pages/MainDisplay'
import ArticleDisplay from './pages/ArticleDisplay'


class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={ MainDisplay }/>
                        <Route path="/article" exact component={ ArticleDisplay }/>
                        <Route path="/create" exact/>
                        <Route path="/edit" exact/>
                        <Route path="/aboutus" exact/>
                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default App;
