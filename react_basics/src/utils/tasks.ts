import type { Task } from "../interface"


export const addTask = (task: string) => {
    const stored = localStorage.getItem('tasks')

    let tasks: Task[] = []

    if (stored) {
        try {
            const parsed = JSON.parse(stored)
            if (Array.isArray(parsed)) {
                tasks = parsed
            }
        } catch {
            tasks = []
        }
    }

    const updatedTasks = [
        ...tasks,
        { id: Date.now(), title: task, completed: false }
    ]

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
}



export const getTasks = (): Task[] => {
  const stored = localStorage.getItem('tasks')

  if (!stored) return []

  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}


export const countActiveTasks = (): number => {
  const stored = localStorage.getItem('tasks')
  if (!stored) return 0

  try {
    const parsed = JSON.parse(stored)
    
    if (!Array.isArray(parsed)) return 0

    return parsed.filter((task: Task) => !task.completed).length
  } catch {
    return 0
  }
}

export const countCompletedTasks = (): number => {
    const stored = localStorage.getItem('tasks')
    if(!stored) return 0
    try {
        const parsed = JSON.parse(stored)
        if(!Array.isArray(parsed)) return 0
        return parsed.filter((task: Task) => task.completed === true).length
    } catch {
        return 0
    }
}

export const updateTask = (taskId: number, title:string) => {
  const stored = localStorage.getItem('tasks')
  if(!stored) return
  try {
    const parsed = JSON.parse(stored)
    if(!Array.isArray(parsed)) return 
    return parsed.map((task) => {
      if(task.id === taskId) {
        task.title = title
      }
    })
  } catch {
    return
  }
}