  import { useEffect, useState } from 'react'
  import { useTasks } from './custom_hooks/useTasks'
  import { TaskList } from './components/TaskList'
  function App()
  {
    // initialize filter selection states as all empty arrays (unselected)
    const [selectedFilters, setSelectedFilters] = useState({
      human_presence: [],
      robot_presence: [],
      robot_platform: [],
      task_type: [],
      hri_interaction: [],
      task_interdependence: [],
      study_design: [],
      control_method: [],
      deception: [],
      domain: [],
      metrics: [],
      physical_capabilities: [],
      affordances: [],
      population: []
    })

    const [search, setSearch] = useState('')  

    const { tasks, loading } = useTasks(selectedFilters, search)

    const [showResults, setShowResults] = useState(false)

    function handleSearch(searchTerm)
    {
      setSearch(searchTerm)
      setShowResults(true)
    }
    
    function handleAdvancedSearch()
    {
      setShowResults(true)
    }
    
    return (showResults ? 
      <div className='resultsPage'>
          <div className='navBar'>
              <a>Home</a>
              <a>About</a>
              <a>Submit Task</a>
              <a>Contact</a>
          </div>
          <div className='resultsBody'>
              <div className='sidebar'>
                  {/* FilterSidebar component goes here */}
              </div>
              <div className='taskGrid'>
                  <TaskList tasks={tasks} loading={loading} />
              </div>
          </div>
      </div>
      
      : 
      <div className='landingPage'>
        <div className='navBar'>
          <a>Home</a>
          <a>About</a>
          <a>Submit Task</a>
          <a>Contact</a>
        </div>

        <div className='pageBody'>
          <div className='searchBar'>
            <input type="text" 
            name="searchBarInput" 
            placeholder="Search tasks.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => handleSearch(search)}>Search</button>
            <a onClick={handleAdvancedSearch}>Advanced Search</a>
          </div>
        </div>
      </div>
    )
  }

  export default App