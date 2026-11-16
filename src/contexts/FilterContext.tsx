import { createContext, useContext, useState, type ReactNode } from 'react'
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

    return (
    <FilterContext.Provider value={{ filter, setFilter }}>
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