export function TaskCard({ task }) {

    function parseTags(str) {
        if (!str) return []
        return str
            .replace(/[{}"]/g, '')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
    }

    return (
        <div className='taskCard'>
            <div className='taskCardHeader'>
                <h3>{task.task_name}</h3>
                <span className='authorBadge'>{task.full_reference}</span>
            </div>

            <div className='taskCardStats'>
                <span>Robots: <strong>{task.robots_per_session}</strong></span>
                <span>People: <strong>{task.participants_per_session}</strong></span>
            </div>

            <div className='taskCardTags'>
                {parseTags(task.robot_presence).map(tag => (
                    <span className='tag' key={tag}>{tag}</span>
                ))}
                {parseTags(task.human_presence).map(tag => (
                    <span className='tag' key={tag}>{tag}</span>
                ))}
                {parseTags(task.hri_interaction).map(tag => (
                    <span className='tag' key={tag}>{tag}</span>
                ))}
                {parseTags(task.task_interdependence).map(tag => (
                    <span className='tag' key={tag}>{tag}</span>
                ))}
            </div>

            <div className='taskCardBody'>
                <div className='taskCardPlatform'>
                    <p><strong>Robot Platform:</strong> {parseTags(task.robot_platform).join(', ')}</p>
                    <p><strong>Task Type:</strong> {parseTags(task.task_type).join(', ')}</p>
                </div>
            </div>

            <div className='taskCardPaper'>
                <p><strong>Paper:</strong> {task.full_reference}</p>
            </div>
        </div>
    )
}