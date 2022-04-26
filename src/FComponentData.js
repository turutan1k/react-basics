import React, { Component } from 'react';

export default class FComponentData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Button pressed'
        };
    }
    render() {
        return (
            <div>
                <h1>Input:</h1>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange}
                />

                <button onClick={()=> {this.props.updateData(this.state.name)}}>press the button</button>
            </div>
        );
    }
}