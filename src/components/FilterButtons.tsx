import { useFilter, type Filter } from '../contexts/FilterContext'

const Filters: Filter[] = ['all', 'active', 'completed']

export function FilterButtons() {
    //which one was clicked on and "setFilter" changes the display
    const { filter, setFilter } = useFilter()

    return (
        <div className="row">
            {Filters.map(f => (<button key={f} onClick={() => setFilter(f)} disabled={f === filter}>
                {f[0].toUpperCase() + f.slice(1)}
            </button>
            ))}
        </div>
    )
}


