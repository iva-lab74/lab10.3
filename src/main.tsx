import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { TodoProvider } from './contexts/TodoContext.tsx'
import { FilterProvider } from './contexts/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
)
