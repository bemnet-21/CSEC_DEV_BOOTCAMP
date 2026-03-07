import { FaRegEdit, FaTrash } from 'react-icons/fa'
import type { Task, TaskCardProps } from '../interface'



const TaskCard = ({ task, onToggle, onDelete }: TaskCardProps) => {
  
  return (
    <div className="w-full bg-white shadow-sm rounded-lg px-4 py-3 flex items-center justify-between border">
      
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle?.(task.id)}
          className="w-4 h-4"
        />

        <span
          className={`text-gray-800 ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </span>
      </div>

      <div className='flex'>
        <button
          onClick={() => onDelete?.(task.id)}
          className="p-2 rounded-md text-blue-500 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">
              <FaRegEdit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete?.(task.id)}
          className="p-2 rounded-md text-red-500 hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
              <FaTrash className="w-4 h-4" />
        </button>
      </div>

    </div>
  )
}

export default TaskCard