// @flow

/* global document */

import type {Node} from 'react';
import React, {Component} from 'react';
import {render} from 'react-dom';

import {observer} from 'mobx-react';

import {getSnapshot, destroy, onSnapshot} from 'mobx-state-tree';
import {connectReduxDevtools} from 'mst-middlewares';

import {TodoStore} from '../test/test';

const localStorageKey = 'mst-todomvc-example';

const initialState = {
    todos: [
        {
            text: 'learn Mobx',
            completed: false,
            id: 0,
        },
        {
            text: 'learn MST',
            completed: false,
            id: 1,
        },
    ],
};


function createTodoStore(snapshot) {
    // create new one
    const store = TodoStore.create(snapshot);

    // connect devtools
    // connectReduxDevtools(require('remotedev'), store);
    // connect local storage

    return store;
}

type PassedPropsType = {
    // +pass: string,
    // +children?: Node,
};

type StateType = null;

class Clock extends Component<PassedPropsType, StateType> {
    constructor(props: PassedPropsType) {
        super(props);

        this.state = null;
    }

    render(): Node {
        const time = new Date().toLocaleTimeString();

        return (
            <div>
                <span>{time}</span>
                <hr/>
                <div>{JSON.stringify(this.props.store1)}</div>
            </div>
        );
    }
}

const nodeWrapper = document.querySelector('.js-app-wrapper');

if (nodeWrapper !== null) {
    // render(<Clock pass="rr"/>, nodeWrapper);
    // Initial render
    renderApp(observer(Clock), createTodoStore(initialState));
} else {
    console.error('Can not find nodeWrapper');
}

function renderApp(App, store) {
    render(<Clock store1={store}/>, nodeWrapper);

    setTimeout(() => store.todos[0].toggle(), 2e3)
}

// // render an instance of Clock into <body>:
// render(<Clock/>, document.body.querySelector('.js-app-wrapper') || document.createElement('div'));

