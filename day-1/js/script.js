const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

const statTotal = document.getElementById('stat-total');
const statActive = document.getElementById('stat-active');
const statCompleted = document.getElementById('stat-completed');

let tasks = [
    { id: 1, text: "Welcome to your to-do list!", completed: false },
    { id: 2, text: "Click the checkbox to mark as complete", completed: false },
    { id: 3, text: "Hover to delete items", completed: true }
];

renderTasks();

addButton.addEventListener('click', () => {
    addTask();
});

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const text = inputField.value.trim();
    if (text === '') return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    inputField.value = '';
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';

    let activeCount = 0;
    let completedCount = 0;

    tasks.forEach(task => {
        if (task.completed) completedCount++;
        else activeCount++;

        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${task.id}`;
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleComplete(task.id);

        const label = document.createElement('label');
        label.htmlFor = `task-${task.id}`;
        label.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
        deleteBtn.onclick = () => deleteTask(task.id);

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(deleteBtn);

        taskList.appendChild(taskDiv);
    });

    statTotal.innerText = tasks.length;
    statActive.innerText = activeCount;
    statCompleted.innerText = completedCount;
}