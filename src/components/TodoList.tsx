import { useTodo } from '../contexts/TodoContext'
import { TodoItem } from './TodoItem'

export function TodoList() {
    //current list of todos
    const { todos } = useTodo()

    if (todos.length === 0) {
        return <p className="empty">No todos yet! Add one above.</p>
    }
    return (
        <ul>
            {todos.map(t => <TodoItem key={t.id} todo={t} />)}
        </ul>
    )

}
