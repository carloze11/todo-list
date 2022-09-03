// Create todo factory function
const createTask = (title, description, dueDate, priority) => {
    const printIt = () => console.log(`Title: ${title} \nDescription: ${description} \nDue: ${dueDate} \nPriority: ${priority}`)
    return {title, description, dueDate, priority}
}



// Add tasks to list 
// Going to have to add an iteration to this to make it work better
// As of now, every input is taking in all values
let tasks = []; 
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const formInputs = document.querySelectorAll('.input');
    formInputs.forEach( input => {
        if (input.value !== '') {
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
            let dueDate = document.getElementById('dueDate').value;
            let priority = document.getElementById('priority').value;
            tasks.push(createTask(title, description, dueDate, priority));
            taskContainer.replaceChildren();
            document.getElementById("fillTask").reset();
            displayTasks();
            completeTask();
        };
    });
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
