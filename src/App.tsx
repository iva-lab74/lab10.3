
import './App.css'

function App() {
  
  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="row">
        <input placeholder="Add a todo..." />
        <button>Add</button>
      </div>
      <div className="row">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p className="empty">No todos yet! Add one above.</p>
      <button>🌙 Dark mode</button>
    </div>
  )
}

export default App
