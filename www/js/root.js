// @flow

/* global document */

import React, {Component} from 'react';
import {render} from 'react-dom';

import {TodoListStore} from '../model/todo-list';

import {App} from './component/app/c-app';
const nodeWrapper = document.querySelector('.js-app-wrapper');

if (nodeWrapper !== null) {
    render(<App todoList={TodoListStore}/>, nodeWrapper);
} else {
    console.error('Can not find nodeWrapper');
}

setTimeout(() => TodoListStore.todoList[0].toggle(), 2e3);
setTimeout(
    () =>
        TodoListStore.push({
            text: 'added',
            completed: true,
            id: 1,
        }),
    4e3
);
