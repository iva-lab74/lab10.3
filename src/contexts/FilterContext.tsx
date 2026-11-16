import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'
//only three filters allowed
export type Filter = 'all' | 'active' | 'completed'

type FilterContextValue = {
    filter: Filter
    setFilter: (f: Filter) => void
}

const FilterContext = createContext<FilterContextValue | undefined>(undefined)

//provider
export function FilterProvider({ children }: { children: ReactNode }) {
    const [filter, setFilter] = useState<Filter>('all')
    //memo
    const value = useMemo(() => ({ filter, setFilter }), [filter])

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}
//useFilter hook
export function useFilter() {
    const ctx = useContext(FilterContext)
    if (!ctx) throw new Error('useFilter must be used inside FilterProvider')
    return ctx
}