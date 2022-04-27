import React, { Component } from 'react';
import './stylesNew.css';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default class CComponent extends Component {
    // constructor(props) {
    //     super(props); //Функция вызывающая род. конструктор

    //     this.state =

    //     };
    // }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Home"></Link>
                            </li>
                            <li>
                                <Link to="/About"></Link>
                            </li>
                            <li>
                                <Link to="/Users"></Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/About" element={<About />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

// CComponent.defaultProps = { name: 'Alexey' };
