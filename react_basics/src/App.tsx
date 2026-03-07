import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import StatusCard from './components/StatusCard'
import type { Task } from './interface'
import { countActiveTasks, countCompletedTasks, getTasks } from './utils/tasks'
import TaskCard from './components/TaskCard'

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const fetchTasks = () => {
    const tasksResult = getTasks()
    setTasks(Array.isArray(tasksResult) ? tasksResult : [])
  }
  const handleToggle = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )

    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }
  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }
  const handleEdit = () => {
    
  }

  useEffect(() => {
    fetchTasks()
  }, [tasks])
  console.log(tasks)
  return (
    <section className='flex flex-col gap-y-4 w-fit mx-auto'>
      <Header />
      <AddTask />
      <div className='grid grid-cols-1 gap-y-3 gap-x-3  mx-auto sm:grid-cols-2 lg:grid-cols-3'>
        <StatusCard label='Active' count={countActiveTasks()} />
        <StatusCard label='Completed' count={countCompletedTasks()} />
        <StatusCard label='Total' count={tasks.length} />
      </div>
      <div className='flex flex-col gap-y-4'>
        {
          tasks && tasks.map((task) => (
            <TaskCard task={task} onToggle={() => handleToggle(task.id)} onDelete={() => handleDelete(task.id)}/>
          ))
        }
      </div>
    </section>
  )
}

export default App
