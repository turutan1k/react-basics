import React, { Component } from 'react';
import './stylesNew.css';
import { Button } from '@mui/material';

export default class CComponent extends Component {
    constructor(props) {
        super(props); //Функция вызывающая род. конструктор

        this.state = {
            count: 0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    }
    decrement() {
        this.setState((state) => ({
            count: state.count - 1,
        }));
    }
    reset() {
        this.setState(() => ({
            count: 0,
        }));
    }

    render() {
        const styles = {
            color: 'black',
            backgroundColor: 'white',
            padding: '10px',
            fontSize: '20px',
        };
        return (
            <div>
                <h1 className="hello">(Lesson 3) - State</h1>
                <h1 style={styles}>Hello World</h1>

                <Button onClick={this.increment}>increment</Button>
                <Button onClick={this.decrement}>decrement</Button>
                <Button onClick={this.reset}>reset</Button>
                <h1>Current: {this.state.count}</h1>
            </div>
        );
    }
}

// CComponent.defaultProps = { name: 'Alexey' };