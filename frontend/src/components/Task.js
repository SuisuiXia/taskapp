import React from 'react';

const Task = ({ task, deleteTask }) => {
    return (
        <div>
            <h3>
                {task.title}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </h3>
        </div>
    );
}

export default Task;
