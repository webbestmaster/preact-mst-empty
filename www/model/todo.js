// @flow

import {types} from 'mobx-state-tree';

type TodoModelPropertyType = {|
    text: string,
    completed: boolean,
    id: number,
    list: Array<number>,
|};

type TodoModelActionType = {};

export const Todo = types.model<TodoModelPropertyType>('Todo', {
    text: types.string,
    completed: types.boolean,
    id: types.number,
    list: types.array<number>(types.number),
});

/*
    .actions(self => ({
        toggle() {
            self.completed = !self.completed;
        },
    }));
*/
