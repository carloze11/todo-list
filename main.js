// Create todo factory function
const createTask = (title, description, dueDate, priority) => {
    const printIt = () => console.log(`Title: ${title} \nDescription: ${description} \nDue: ${dueDate} \nPriority: ${priority}`)
    return {title, description, dueDate, priority, printIt}
}

let title = document.getElementById('title');
let description = document.getElementById('description');
let dueDate = document.getElementById('dueDate');
let priority = document.getElementById('priority');


let tasks = []; 
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    title = title.value || '';
    description = description.value || '';
    dueDate = dueDate.value || '';
    priority = priority.value || '';
    tasks.push(createTask(title, description, dueDate, priority));
})
