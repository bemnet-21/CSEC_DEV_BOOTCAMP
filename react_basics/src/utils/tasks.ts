export const addTask = (task: string) => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    // const addedTasks = tasks.push({
    //     id: Date.now(),
    //     title: task
    // })
    const addedTasks = [...tasks, {
        id: Date.now(),
        title: task
    }]

    localStorage.setItem('tasks', JSON.stringify(addedTasks))
}