const initState = [
    { id: 1, name: 'Learn Yoga', completed: false, prioriry: 'High' },
    { id: 2, name: 'Learn Redux', completed: true, prioriry: 'Medium' },
    { id: 3, name: 'Learn JS', completed: true, prioriry: 'Low' },
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleTodoStatus':
            return state.map((todo) =>
                todo.id === action.payload ?
                    { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state;
    }
}

export default todoReducer;