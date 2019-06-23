// @flow

import {types} from 'mobx-state-tree';
import type {ActionModelType} from 'mobx-state-tree';
// import {connectReduxDevtools} from 'mst-middlewares';
// import remotedev from 'remotedev';

import {Todo} from './todo';

type TodoListModelPropertyType = {|
    todoList: Array<typeof Todo>,
|};

type TodoListModelActionType = {|
    +push: (todo: typeof Todo) => void,
|};

export const TodoList = types
    .model<TodoListModelPropertyType, TodoListModelActionType>('TodoList', {
        todoList: types.array<typeof Todo>(Todo),
    })
    .actions<TodoListModelPropertyType, TodoListModelActionType>(
        (self: ActionModelType<TodoListModelPropertyType, TodoListModelActionType>): TodoListModelActionType => ({
            push(todo: typeof Todo) {
                self.todoList.push(todo);
            },
        })
    );

/*
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
*/

// connectReduxDevtools(remotedev, TodoListStore);
