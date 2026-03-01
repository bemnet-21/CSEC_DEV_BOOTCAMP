import React, { useState, type ReactHTMLElement } from 'react'
import { FaPlus } from 'react-icons/fa'
import { addTask } from '../utils/tasks'

const AddTask = () => {
  const [task, setTask] = useState<string>('')
  
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTask(task)
    setTask('')
    alert('Added')
  }
  return (
    <form className='flex gap-x-4 place-self-center border border-red-500' onSubmit={handleAdd}>
        <div className=''>
            <input
                type='text'
                placeholder='Add new task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className='border border-gray-400 px-4 py-3 rounded-md focus:outline-none'
            />
        </div>
        <button type="submit" className='flex items-center bg-blue-600 text-white px-3 py-3 rounded-md gap-x-2 hover:bg-blue-500'>
            <FaPlus />
            <h2>Add</h2>
        </button>
    </form>
  )
}

export default AddTask
