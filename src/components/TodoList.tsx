import { useTodo } from '../contexts/TodoContext'
import { TodoItem } from './TodoItem'
import { useFilter } from '../contexts/FilterContext'


export function TodoList() {
    //current list of todos
    const { todos } = useTodo()
    //call filter
    const { filter } = useFilter()

    const active = todos.filter(t => {
        if (filter === 'active') return !t.completed
        if (filter === 'completed') return t.completed
        return true
    })

    if (active.length === 0) {
        return <p className="empty">No todos to show.</p>
    }

    if (todos.length === 0) {
        return <p className="empty">No todos yet! Add one above.</p>
    }
    return (
        <ul>
            {todos.map(t => <TodoItem key={t.id} todo={t} />)}
            {active.map(t => <TodoItem key={t.id} todo={t} />)}
        </ul>
    )

}
