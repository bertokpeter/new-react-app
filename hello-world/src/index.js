'use srict';

import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
    return (
        <p>Hello, {props.name}</p>
    );
}

ReactDOM.render(
    <Hello name='world'/>,
    document.getElementById('root')
);