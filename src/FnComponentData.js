import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FnComponentData extends Component {
    render() {
        return (
            <div>
                <h1>Render input</h1>
                <p>{this.props.input}</p>
            </div>
        );
    }
}
FnComponentData.propTypes = {
    input: PropTypes.node.isRequired,
};
