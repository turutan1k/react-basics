import React from 'react';
import logo from './logo.svg';
import './App.css';

import CComponent from './CComponent';
import ToDoAppComponent from './ToDoAppComponent';
import FComponent from './FComponent';

import CComponentData from './CComponentData';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <FComponent name="Ivan" />
                <CComponent numbers={[1, 2, 3, 4, 5]} name="Alex" />
                <ToDoAppComponent />
                <h1>Lesson 6</h1>

                <CComponentData />

                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
