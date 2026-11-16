//need useReducer
import { createContext, useContext, useReducer, type ReactNode } from 'react'
//shape
export type Todo = {
    id: string;
    text: string;
    completed: boolean
}
//actions/ name described
type Action =
    | { type: 'add'; text: string }
    | { type: 'toggle'; id: string }
    | { type: 'delete'; id: string }
    | { type: 'edit'; id: string; text: string }
    | { type: 'clearCompleted' }

//whats new state/ another action stays unchanged
function reducer(state: Todo[], action: Action): Todo[] {
    //all the actions
    switch (action.type) {
        case 'add':
            return [...state, { id: crypto.randomUUID(), text: action.text, completed: false }]
        //returns new array, completed when matched
        case 'toggle':
            return state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t)
        //returns
        case 'delete':
            return state.filter(t => t.id !== action.id)
        //replace text
        case 'edit':
            return state.map(t => t.id === action.id ? { ...t, text: action.text } : t)
        //clears
        case 'clearCompleted':
            return state.filter(t => !t.completed)

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

const TodoContext = createContext<TodoContextValue | undefined>(undefined)

export function TodoProvider({ children }: { children: ReactNode }) {
    //disptach sends action to reducer[] start empty
    const [todos, dispatch] = useReducer(reducer, [])

    //clean todo add
    const addTodo = (text: string) => dispatch({ type: 'add', text })
    //add todo with every add
    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
//needs a useTodo hook to reuse with
export function useTodo() {
    const ctx = useContext(TodoContext)
    if (!ctx) throw new Error('useTodos must be used inside TodoProvider')
    return ctx
}