import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    searchTextSelector,
    (todoList, status, priorities, searchText) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities?.length ?
                    todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                    priorities.includes(todo.prioriry) :
                    todo.name.toLowerCase().includes(searchText.toLowerCase());
            }
            return (
                todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities?.length ?
                    todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                    priorities.includes(todo.prioriry) : true)
            );
        })
    }
)

// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
//     });

//     return todosRemaining;
// }

// export const searchTextSelector = (state) => state.filters.search;