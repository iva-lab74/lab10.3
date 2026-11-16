
import './App.css'
import { useTheme } from './contexts/ThemeContext';
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { ClearCompletedButton } from './components/ClearCompletedButton'
import { FilterButtons } from './components/FilterButtons'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
      <ClearCompletedButton />
      <FilterButtons />
      <p className="empty">No todos yet! Add one above.</p>
      <button onClick={toggleTheme}>{theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}</button>
    </div>
  )
}

export default App
