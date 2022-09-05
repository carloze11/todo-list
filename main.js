// Create todo factory function
const createTask = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}

const resetTasks = () => {
    taskContainer.replaceChildren();
    displayTasks();
    completeTask();
    deleteTask();

}

// Add tasks to list 
// Going to have to add an iteration to this to make it work better
// As of now, every input is taking in all values
let tasks = []; 

const addTask = () => {
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
            deleteTask();
            completeTask();
        }
    });
};

addTask();

// Display tasks 
const taskContainer = document.querySelector('.taskContainer');
let div = document.createElement('div'); 

const displayTasks = () => {
    tasks.forEach( (task, i) => {
    const taskCard = div.cloneNode();
    taskCard.setAttribute('id', `${i}`)
    const taskCompleteBtn = document.createElement('input');
    taskCompleteBtn.classList.add('task-btn')
    taskCompleteBtn.setAttribute('type', 'checkbox');
    taskCompleteBtn.setAttribute('id', 'checkbox');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete'
    taskCard.appendChild(taskCompleteBtn);
    for (const prop in task){
        let newDiv = div.cloneNode()
        taskCard.appendChild(newDiv)
        newDiv.textContent = task[prop]
    };
    taskCard.appendChild(deleteBtn);
    taskContainer.appendChild(taskCard);
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


// Delete task 
const deleteTask = () => {
    let deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach( (btn, i) => {
        btn.addEventListener('click', () => {
            console.log(btn.parentNode.id)
            tasks.splice(btn.parentNode.id, 1);
            resetTasks();
        });
    })
}

// Add new project 
let projects = [];
const addProject = (name) => {
    return {name}
}

// Collapsing sidebar 
