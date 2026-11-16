import { createContext, useContext, useState, useEffect, useMemo, useCallback, type ReactNode } from "react";
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
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme')
        return saved === 'dark' ? 'dark' : 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    //flipping/ reads the previous theme first
    const toggleTheme = useCallback(() => {
        setTheme(t => (t === 'light' ? 'dark' : 'light'))
    }, [])
    //memo
    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}
//THE HOOK
export function useTheme() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
    return ctx
}
