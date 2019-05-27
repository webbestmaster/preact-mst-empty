// @flow

/* global document */

// import React from 'react';
// import {render} from 'react-dom';

import {h, render, Component} from 'preact';

class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>1111</span>;
    }
}

// render an instance of Clock into <body>:
render(<Clock/>, document.body);
