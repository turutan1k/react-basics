import React, { Component } from 'react';

export default class toDoAppComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault(); //Обработчик отладки
        this.setState({
            input:this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    render() {
        return (
            <div>
                <h1>(Lesson 4) -  ToDoApp</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Tap me</button>
                </form>
                <h5>Controlled input:</h5>
                <ul>
                    {this.state.items.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
