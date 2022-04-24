import React from 'react';
import logo from './logo.svg';
import './App.css';

import CComponent from './CComponent';
import ToDoAppComponent from './ToDoAppComponent';
import FComponent from './FComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <FComponent name="Ivan" />
                <CComponent numbers={[1, 2, 3, 4, 5]} name="Alex" />
                <ToDoAppComponent />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
