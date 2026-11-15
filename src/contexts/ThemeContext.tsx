import { createContext, useContext, useState, type ReactNode } from "react";
//named values
type Theme = 'light' | 'dark'

type ThemeContextValue = {
    theme: Theme
    toggleTheme: () => void
}

//this creates the context / needs check if the provider even exists
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
//wraps the app, share value
export function ThemeProvider({ children }: { children: ReactNode }) {
    //starts with current theme light mode
    const [theme, setTheme] = useState<Theme>('light')

    //flipping/ reads the previous theme first
    const toggleTheme = () => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'))
  }

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}
