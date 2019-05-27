import {types, onSnapshot} from 'mobx-state-tree';

const Todo = types
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

export const TodoStore = types.model('Store', {
    todos: types.array(Todo),
});

/*
// create an instance from a snapshot
const todoStore = TodoStore.create({
    todos: [
        {
            title: 'Get coffee',
        },
    ],
});

// listen to new snapshots
onSnapshot(todoStore, snapshot => {
    console.dir(snapshot);
});
*/

// invoke action that modifies the tree
// store.todos[0].toggle();
// store.todos[0].toggle();
// store.todos[0].toggle();
// prints: `{ todos: [{ title: "Get coffee", done: true }]}`
