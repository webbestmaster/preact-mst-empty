// @flow1111

import type {Node} from 'react';
import React, {Component} from 'react';
import {observer} from 'mobx-react';

type PassedPropsType = {
    +rr: string,
    // TODO: add todoList
};

type StateType = null;

class AppComponent extends Component<PassedPropsType, StateType> {
    render(): Node {
        return <div>{JSON.stringify(this.props.todoList)}</div>;
    }
}

export const App = observer<AppComponent<PassedPropsType, StateType>>(AppComponent);
