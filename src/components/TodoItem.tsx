import type { Todo } from '../contexts/TodoContext'
//reusing

//adding strikethrough
export function TodoItem({ todo }: { todo: Todo }) {
      return (
    <li>
      <input type="checkbox" checked={todo.completed}  />
      <span className={todo.completed ? 'done' : ''}>{todo.text}</span>
    </li>
  )

}
