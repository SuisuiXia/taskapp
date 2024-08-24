import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('/api/tasks/')
            .then(res => {
                setTasks(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const addTask = () => {
        axios.post('/api/tasks/add/', { title: title, completed: false })
            .then(res => setTasks([...tasks, res.data]))
            .catch(err => console.log(err));
        setTitle('');
    }

    const deleteTask = (id) => {
        axios.delete(`/api/tasks/delete/${id}/`)
            .then(res => setTasks(tasks.filter(task => task.id !== id)))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={addTask}>Add Task</button>
            {tasks.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    );
}

export default TaskList;
