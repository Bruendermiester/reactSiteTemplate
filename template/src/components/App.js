import React from 'react';
import Header from './Header'
import MainDisplay from './MainDisplay'

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <MainDisplay/>
            </div>
        )
    }
}

export default App;
