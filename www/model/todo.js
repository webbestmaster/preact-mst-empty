import {types} from 'mobx-state-tree';

export const Todo = types
    .model('Todo', {
        text: types.string,
        completed: types.boolean,
        id: types.number,
    })
    .actions(self => ({
        toggle() {
            self.completed = !self.completed;
        },
    }));
