//need useReducer
import { createContext, useContext, useReducer, type ReactNode } from 'react'
//shape
export type Todo = {
    id: string;
    text: string;
    completed: boolean
}
//actions
type Action =
    | { type: 'add'; text: string }

//whats new state/ anyother action stays unchanged
function reducer(state: Todo[], action: Action): Todo[] {

    switch (action.type) {
        case 'add':
            return [...state, { id: crypto.randomUUID(), text: action.text, completed: false }]

        default:
            return state
    }
    //returns new array/ special ID
    
}
//who gets what
type TodoContextValue = {
  todos: Todo[]
  addTodo: (text: string) => void
}

