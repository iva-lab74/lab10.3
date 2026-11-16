import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

export function TodoInput() {
    //text
    const [text, setText] = useState('')
    const { addTodo } = useTodo()
    //no reload
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const trimmed = text.trim()
        if (!trimmed) return

        addTodo(trimmed)
        setText('')
    }
    return (
        <form className="row" onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a todo..."
            />
            <button type="submit">Add</button>
        </form>
    )
}

    