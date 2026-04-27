import { TaskCard } from './TaskCard'

export function TaskList({ tasks, loading }) {
    if (loading) return <p>Loading...</p>
    if (!tasks || tasks.length === 0) return <p>No tasks found.</p>

    return (
        <div className='taskList'>
            <p>Showing {tasks.length} tasks</p>
            {tasks.map(task => (
                <TaskCard key={task.paper_id} task={task} />
            ))}
        </div>
    )
}