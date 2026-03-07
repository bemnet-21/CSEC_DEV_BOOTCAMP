export interface StatusCardProps {
    count: number
    label: string
}

export interface Task {
    id: number
    title: string
    completed: boolean
}
export interface TaskCardProps {
  task: Task
  onToggle?: (id: number) => void
  onDelete?: (id: number) => void
}