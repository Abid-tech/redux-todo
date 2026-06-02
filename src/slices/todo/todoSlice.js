import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ 
        id: 1, 
        text: 'hello world ( demo )', 
        time: '6/2/2026, 10:05:19 PM (demo)',
        isCompleted: false,
        isEdit: false,
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                time: new Date().toLocaleString(),
                isCompleted: false,
                isEdit: false,
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.isCompleted = !todo.isCompleted
            }
        },

        editTrue: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) { 
                todo.isEdit = !todo.isEdit
            }
        },

        editTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.newText
                todo.isEdit = false 
            }
        },
        cancelEdit: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.isEdit = false
            }
        }
    }
})

export const { addTodo, removeTodo, toggleComplete, editTrue, editTodo, cancelEdit } = todoSlice.actions
export default todoSlice.reducer