export default createDom;

const createDom = (() => {
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

    const addProjectBtn = (() => {
        const addProject = div.cloneNode();
        addProject.classList.add('addProject');
        addProject.textContent = '+ Add Project';
        projectsBar.appendChild(addProject)
      })();

      ///////////////////////////////////////////////////
      //////////CREATING DEFAULT ADDTASK CARD////////////
      ///////////////////////////////////////////////////
const tasksContainer = div.cloneNode();
tasksContainer.classList.add('tasksContainer');
container.appendChild(tasksContainer);


const createBtn = (() => {
  const taskBtn = div.cloneNode();
  taskBtn.classList.add('taskBtn');
  taskBtn.textContent = '+ Add Task';
  tasksContainer.appendChild(taskBtn);
})();




})();
