// @flow

import {types} from 'mobx-state-tree';
import type {ActionModelType} from 'mobx-state-tree';

type TodoModelPropertyType = {|
    text: string,
    completed: boolean,
    id: number,
    list: Array<number>,
|};

type TodoModelActionType = {|
    +done: () => void,
|};

export const Todo = types
    .model<TodoModelPropertyType, TodoModelActionType>('Todo', {
        text: types.string,
        completed: types.boolean,
        id: types.number,
        list: types.array<number>(types.number),
    })
    .actions<TodoModelPropertyType, TodoModelActionType>(
        (self: ActionModelType<TodoModelPropertyType, TodoModelActionType>): TodoModelActionType => ({
            done() {
                self.completed = true;
            },
        })
    );
