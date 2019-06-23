// @flow111

import {types} from 'mobx-state-tree';
import {connectReduxDevtools} from 'mst-middlewares';
import remotedev from 'remotedev';

import {Todo} from './todo';

export const TodoList = types
    .model('TodoList', {
        todoList: types.array(Todo),
    })
    .actions(self => ({
        push(todo) {
            self.todoList.push(todo);
        },
    }));

const todoListInitialState = {
    todoList: [
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

export const TodoListStore = TodoList.create(todoListInitialState);

connectReduxDevtools(remotedev, TodoListStore);
