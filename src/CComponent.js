import React, { Component } from 'react';
import { Menu } from './Menu';

export default class CComponent extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h1>CComponent {this.props.name}</h1>
            </div>
        );
    }
}

CComponent.defaultProps = { name: 'Alexey' };
