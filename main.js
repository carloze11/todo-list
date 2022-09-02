// Create todo factory function
const createTask = (title, description, dueDate, priority) => {
    const printIt = () => console.log(`Title: ${title} \nDescription: ${description} \nDue: ${dueDate} \nPriority: ${priority}`)
    return {title, description, dueDate, priority}
}

let title = document.getElementById('title');
let description = document.getElementById('description');
let dueDate = document.getElementById('dueDate');
let priority = document.getElementById('priority');

// Add tasks to list 
let tasks = []; 
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let taskTitle = title.value || '';
    let taskDescription = description.value || '';
    let taskDueDate = dueDate.value || '';
    let taskPriority = priority.value || '';
    tasks.push(createTask(taskTitle, taskDescription, taskDueDate, taskPriority));
    displayTasks();
    document.getElementById("fillTask").reset();
})


// Display tasks 
const taskContainer = document.querySelector('.taskContainer');
let div = document.createElement('div'); 

const displayTasks = () => {
    tasks.forEach( task => {
    const taskCard = div.cloneNode();
    const taskCompleteBtn = document.createElement('button');
    taskCard.appendChild(taskCompleteBtn)
    taskContainer.appendChild(taskCard);
    for (const prop in task){
        let newDiv = div.cloneNode()
        taskCard.appendChild(newDiv)
        newDiv.textContent = task[prop]
    }
})
}

// Mark tasks as completed

