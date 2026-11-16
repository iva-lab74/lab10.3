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