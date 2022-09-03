// Create todo factory function
const createTask = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}



// Add tasks to list 
// Going to have to add an iteration to this to make it work better
// As of now, every input is taking in all values
let tasks = []; 
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let title;
    let description;
    let dueDate;
    let priority;
    const formInputs = document.querySelectorAll('.input');
    if (Array.from(formInputs).every(input => input.value !== '') === true){
        for (let i = 0; i < formInputs.length; i++) {
            if (formInputs[i].id === 'title'){
                title = document.getElementById('title').value;
            }
            if (formInputs[i].id === 'description'){
                description = document.getElementById('description').value;
            }
            if (formInputs[i].id === 'description'){
                dueDate = document.getElementById('dueDate').value;
            }
            if (formInputs[i].id === 'description'){
                priority = document.getElementById('priority').value;
            }
        }
        tasks.push(createTask(title, description, dueDate, priority));
        taskContainer.replaceChildren();
        document.getElementById("fillTask").reset();
        displayTasks();
        completeTask();
    }
})


// Display tasks 
const taskContainer = document.querySelector('.taskContainer');
let div = document.createElement('div'); 

const displayTasks = () => {
    tasks.forEach( task => {
    const taskCard = div.cloneNode();
    const taskCompleteBtn = document.createElement('input');
    taskCompleteBtn.classList.add('task-btn')
    taskCompleteBtn.setAttribute('type', 'checkbox');
    taskCompleteBtn.setAttribute('id', 'checkbox');
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
const completeTask = () => {
    let checkbox = document.querySelectorAll('#checkbox');
    checkbox.forEach( box => {
        box.addEventListener('click', () => {
            box.parentNode.style.color = 'lightgray';
            box.parentNode.style.textDecoration = 'line-through';
        });
    })
};


// Add new project 
let projects = [];
const addProject = (name) => {
    return {name}
}

// Collapsing sidebar 
let coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    })
}