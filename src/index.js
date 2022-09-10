import _ from 'lodash';
import './style.css';

///Get body 
const div = document.createElement('div'); 
const span = document.createElement('span');
const body = document.querySelector('body');

///CREATING DOM HEADER
const header = document.createElement('header');
header.textContent = 'Get\'er Done!';
body.appendChild(header);

///CREATE CONTAINER TO HOLD STUFF
const container = div.cloneNode();
container.classList.add('container');
body.appendChild(container)



//CREATING DOM FORM
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const titleDiv = div.cloneNode();

/////////////////////////////////////////////////////////
//////////////////CREATING DOM SIDEBAR///////////////////
/////////////////////////////////////////////////////////
const sideBar = div.cloneNode();
sideBar.classList.add('sideBar');
container.appendChild(sideBar);

const inbox = div.cloneNode();
inbox.classList.add('inbox');
inbox.textContent = 'Inbox';
sideBar.appendChild(inbox)

const projectsBar = div.cloneNode();
projectsBar.classList.add('projectsBar');
projectsBar.textContent = 'Projects';
sideBar.appendChild(projectsBar);

const addProjectBtn = () => {
  const addProject = div.cloneNode();
  addProject.classList.add('addProject');
  addProject.textContent = '+ Add Project';
  projectsBar.appendChild(addProject)
}
addProjectBtn();





///////////////////////////////////////////////////
//////////CREATING DEFAULT ADDTASK CARD////////////
///////////////////////////////////////////////////
const tasksContainer = div.cloneNode();
tasksContainer.classList.add('tasksContainer');
container.appendChild(tasksContainer);


const createBtn = () => {
  const taskBtn = div.cloneNode();
  taskBtn.classList.add('taskBtn');
  taskBtn.textContent = '+ Add Task';
  tasksContainer.appendChild(taskBtn);
}

createBtn();

////////////////////////////////////////////////////////////
/////////////////////////FUNCTIONS//////////////////////////
////////////////////////////////////////////////////////////





////////////////////////////////////////////////////
////////////////////////////////////////////////////
//add tasks to DOM
let tasks = [];


const addTask = (title , dueDate = 'No date', priority = 'Low') => {  
  return {title, dueDate, priority}
};


///use enter button to get value from task input
const createTaskElement = () => {
    let task = document.querySelector('.taskBtn')
    const taskInput = task.querySelector('.taskInput');
    taskInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 && taskInput.value !== ''){
            const checkBox = createCheckbox();
            const deleteBtn = createDeleteBtn();
            const taskTitle = span.cloneNode();
            taskTitle.classList.add('taskTitle');
            taskTitle.textContent = taskInput.value;
            task.appendChild(taskTitle);
            task.insertBefore(checkBox, task.firstChild);
            task.appendChild(deleteBtn);
            taskInput.remove();
            task.classList.remove('taskBtn');
            task.classList.add('task');
            task.setAttribute('id', `task-${tasks.length}`);
            tasks.push(addTask(taskTitle.textContent));
            return createBtn();
        }
    })
};


const getTaskInfo = () => {
  const taskInput = document.createElement('input');
  const taskBtn = document.querySelector('.taskBtn'); 
  taskInput.classList.add('taskInput');
  taskInput.setAttribute('placeholder', '+ Add Task')
  taskInput.setAttribute('required','');
  taskInput.required = true;
  taskBtn.replaceChildren();
  taskBtn.appendChild(taskInput);
  taskInput.focus()
  createTaskElement();
}








const createCheckbox = () => {
  const checkBox = document.createElement('input');
  checkBox.classList.add('checkBox');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', 'checkbox');
  return checkBox;
}

const taskComplete = (element) => {
  const task = element.parentNode;
  const deleteBtn = task.querySelector('button')
  task.style.color = 'lightgray';
  task.style.textDecoration = 'line-through';
  deleteBtn.remove();
}

const taskIncomplete = (element) => {
  const task = element.parentNode;
  const deleteBtn = createDeleteBtn();
  task.appendChild(deleteBtn);
  task.style.color = 'black';
  task.style.textDecoration = 'none';
}


const createDeleteBtn = () => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.textContent = 'Delete';
  return deleteBtn;
};

const deleteTask = (element) => {
  const task = element.parentNode;
  const taskTitle = task.querySelector('.taskTitle')
  tasks = tasks.filter( (x,i) => `task-${i}` !== task.id)
  task.remove();
};



///project
let projects = []; 

const addProj = (title) => {
  return {title};
}

//use enter to get val from proj input
const createProjElement = () => {
    let proj = document.querySelector('.addProject');
    const projInput = proj.querySelector('.projInput');
    projInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 && projInput.value !== ''){
            console.log('ehe')
            const projTitle = span.cloneNode();
            const deleteBtn = createDeleteBtn();
            projTitle.classList.add('projTitle');
            projTitle.textContent = projInput.value;
            proj.appendChild(projTitle);
            proj.appendChild(deleteBtn);
            projInput.remove();
            deleteBtn.setAttribute('id', 'deleteProj');
            proj.classList.remove('addProject');
            proj.classList.add('project');
            proj.setAttribute('id', `project-${projects.length}`);
            projects.push(addProj(projTitle.textContent));
            return addProjectBtn();
        }
    })
};




const getProjInfo = () => {
  const projInput = document.createElement('input');
  const addProject = document.querySelector('.addProject');
  projInput.classList.add('projInput');
  projInput.setAttribute('placeholder', '+ Add Project')
  projInput.setAttribute('required','');
  addProject.replaceChildren();
  addProject.appendChild(projInput);
  projInput.focus();
  createProjElement();
};

const deleteProj = (element) => {
  let proj = element.parentNode;
  projects = projects.filter( (x,i) => `project-${i}` !== proj.id)
  proj.remove();
}




//create a single listener
document.querySelector('body').addEventListener('click', (event) => {
  const element = event.target;
  if (element.className === 'taskBtn'){
    getTaskInfo();
  }
  if (element.className === 'tasksBar'){
    //myTasks();
  }
  if (element.className === 'projectsBar'){
    //myProjects();
  }
  if (element.className === 'addProject'){
    getProjInfo();
  }
  if (element.className === 'checkBox'){
    if (element.checked === true){
      taskComplete(element);
    }
    if (element.checked !== true){
      taskIncomplete(element);
    }
  }
  if (element.className === 'deleteBtn'){
    deleteTask(element);
  }
  if (element.id === 'deleteProj'){
    deleteProj(element);
  } 
  
});


//add ability to edit task