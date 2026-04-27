// function to pull data from table
import { useEffect, useState } from 'react' 
import { supabase } from '../supabaseClient'


// declare custom hook that receives the 'selectedFilters' or 'search' object(s) from App.jsx
export function useTasks(selectedFilters, search)
{
    const singleValueColumns = [
        'human_presence', 'robot_presence', 'hri_interaction',
        'task_interdependence', 'study_design', 'control_method',
        'deception', 'domain'
    ]

    const multiValueColumns = [
        'robot_platform', 'task_type', 'metrics',
        'physical_capabilities', 'affordances', 'population'
    ]
    // create var called tasks with setTasks to update the array 
    // useState is a hook that updates the UI when state changes
    const [tasks, setTasks] = useState([])

    // create loading flag that updates when data is actually received
    // loading flag starts as true
    const [loading, setLoading] = useState(true)

    // useEffect is a hook that allows for interactions with systems outside of React
    useEffect(() => {
        // async function to fetch tasks from the table without interrupting anything
        async function fetchTasks() {
            
            // grab all columns from the table
            let query = supabase.from('papers').select('*')

            const applyFilter = (query, key) => {
                // if empty or null array then do nothing
                if (!selectedFilters[key] || selectedFilters[key].length == 0)
                    return query

                // check if it's a multi value column
                if (multiValueColumns.includes(key))
                    // add values within the multi value column that are selected to the query
                    return query.overlaps(key, selectedFilters[key])
                
                if (singleValueColumns.includes(key))
                    return query.in(key, selectedFilters[key])

                return query
            }

            // iterate over every filter key 
            for (const key in selectedFilters)
            {
                query = applyFilter(query, key)
            }
            
            // search filter
            if (search && search.length > 0)
                query = query.ilike('full_reference', `%${search}%`)

        
            // once the query is fully filtered, fire and fetch the matching tasks
            // return data if success and error if failure occured
            const { data, error } = await query
            
            if (!error) setTasks(data)
            
            setLoading(false)
        }

        fetchTasks()
    }, [selectedFilters, search])

    return { tasks, loading }
}
