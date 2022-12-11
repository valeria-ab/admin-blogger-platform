import React from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <SideBar/>
            <Main/>
        </div>
    );
}

export default App;
