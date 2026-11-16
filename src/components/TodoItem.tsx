
import { useState } from 'react'
import { useTodo, type Todo } from '../contexts/TodoContext'
//reusing

//adding strikethrough
export function TodoItem({ todo }: { todo: Todo }) {
    const { toggleTodo, deleteTodo, editTodo } = useTodo()
    const [editing, setEditing] = useState(false)
    const [draft, setDraft] = useState(todo.text)

    //save logic
    const save = () => {
        const trimmed = draft.trim()
        if (trimmed) editTodo(todo.id, trimmed)
        setEditing(false)
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <span className={todo.completed ? 'done' : ''}>{todo.text}</span>
            {editing ? (<input autoFocus value={draft} onChange={e => setDraft(e.target.value)} onBlur={save} onKeyDown={e => {
                if (e.key === 'Enter') save()
                if (e.key === 'Escape') setEditing(false)
            }}
            />
            ) : (
                <span className={todo.completed ? 'done' : ''} onDoubleClick={() => { setDraft(todo.text); setEditing(true) }}>
                    {todo.text}
                </span>
            )}
            <button onClick={() => deleteTodo(todo.id)}>✕</button>
        </li>
    )

}
