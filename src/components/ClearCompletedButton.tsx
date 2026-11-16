import { useTodo } from '../contexts/TodoContext'

export function ClearCompletedButton() {
    const { todos, clearCompleted } = useTodo()

    //hides "completed" button on empty list
    if (todos.length === 0) return null

    return <button onClick={clearCompleted}>Clear completed</button>

}