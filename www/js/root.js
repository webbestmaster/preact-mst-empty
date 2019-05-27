// @flow

/* global document */

import type {Node} from 'react';
import React, {Component} from 'react';
import {render} from 'react-dom';

type PassedPropsType = {|
    +pass: string,
|};
type StateType = null;

class Clock extends Component<PassedPropsType, StateType> {
    constructor(props: PassedPropsType) {
        super(props);

        this.state = null;
    }

    render(): Node {
        const time = new Date().toLocaleTimeString();

        return <span>{time}</span>;
    }
}

const nodeWrapper = document.querySelector('.js-app-wrapper');

if (nodeWrapper !== null) {
    render(<Clock pass="rr"/>, nodeWrapper);
} else {
    console.error('Can not find nodeWrapper');
}

// // render an instance of Clock into <body>:
// render(<Clock/>, document.body.querySelector('.js-app-wrapper') || document.createElement('div'));
