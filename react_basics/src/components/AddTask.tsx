import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { addTask } from '../utils/tasks'

const AddTask = () => {
  const [task, setTask] = useState<string>('')

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!task.trim()) return

    addTask(task.trim())
    setTask('')
  }

  return (
    <form
      className="flex flex-col px-12 gap-4 w-full max-w-xl mx-auto sm:flex-row "
      onSubmit={handleAdd}
    >
      <input
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-400 px-4 py-3 rounded-md focus:outline-none"
      />

      <button
        type="submit"
        className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-md gap-2 hover:bg-blue-500"
      >
        <FaPlus />
        <span>Add</span>
      </button>
    </form>
  )
}

export default AddTask