import React from 'react';
import PropTypes from 'prop-types';

export default function FComponent(props) {
    return (
        <div>
            <h1>(Lesson 2) - State</h1>
            <h1>Hello, {props.name}</h1>
        </div>
    );
}
FComponent.propTypes = {
    name: PropTypes.node.isRequired,
};