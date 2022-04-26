import React, { Component } from 'react';
import FComponentData from './FComponentData';
import FnComponentData from './FnComponentData';

export default class CComponentData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            name:'Button not pressed',
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    updateData(value) {
        this.setState({
            name:value
        });
    }
    render() {
        return (
            <div>
                <FComponentData
                    input={this.state.inputValue}
                    handleChange={this.handleChange}
                />
                <FnComponentData
                    input={this.state.inputValue}
                />
                <p>State: {this.state.name}</p>
                <FComponentData
                    updateData={this.updateData}
                />
            </div>
        );
    }
}
