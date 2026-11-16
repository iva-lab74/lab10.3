
import './App.css'
import { useTheme } from './contexts/ThemeContext';
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const {theme, toggleTheme } = useTheme()
  
  return (
    <div className={`app ${theme}`}>
      <h1>Todo App</h1>
      <TodoInput />
      <div className="row">
        <input placeholder="Add a todo..." />
        <button>Add</button>
      </div>
      <TodoList />
      <TodoList />
      <ClearCompletedButton />
      <div className="row">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p className="empty">No todos yet! Add one above.</p>
      <button onClick={toggleTheme}>{theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}</button>
    </div>
  )
}

export default App
