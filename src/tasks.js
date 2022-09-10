export default createTask;


//add tasks to DOM

const createTask = (() => {

const addTask = (title , dueDate = 'No date', priority = 'Low') => {  
  return {title, dueDate, priority}
};

  ///use enter button to get value from task input
  const createBtn = (() => {
    const taskBtn = div.cloneNode();
    taskBtn.classList.add('taskBtn');
    taskBtn.textContent = '+ Add Task';
    tasksContainer.appendChild(taskBtn);
  })();

  const createTaskElement = (el) => {
    if (event.key === 'Enter' && el.value !== ''){
      let task = document.querySelector('.taskBtn')
      const checkBox = createCheckbox();
      const deleteBtn = createDeleteBtn();
      const taskTitle = span.cloneNode();
      const taskInput = task.querySelector('.taskInput');
      taskTitle.classList.add('taskTitle');
      taskTitle.textContent = el.value;
      task.appendChild(taskTitle);
      task.insertBefore(checkBox, task.firstChild);
      task.appendChild(deleteBtn);
      taskInput.remove();
      task.classList.remove('taskBtn');
      task.classList.add('task');
      task.setAttribute('id', `task-${tasks.length}`);
      tasks.push(addTask(taskTitle.textContent));
      return createBtn();
    };
  };

  const createCheckbox = () => {
    const checkBox = document.createElement('input');
    checkBox.classList.add('checkBox');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'checkbox');
    return checkBox;
  }
  
  
  const createDeleteBtn = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    return deleteBtn;
  };
  
  
})();

const getTaskInfo = (() => {
    const taskInput = document.createElement('input');
    const taskBtn = document.querySelector('.taskBtn'); 
    taskInput.classList.add('taskInput');
    taskInput.setAttribute('onkeydown', 'createTaskElement(this)');
    taskInput.setAttribute('placeholder', '+ Add Task')
    taskInput.setAttribute('required','');
    taskInput.required = true;
    taskBtn.replaceChildren();
    taskBtn.appendChild(taskInput);
    taskInput.focus()
  })();

  const taskComplete = ((element) => {
    const task = element.parentNode;
    const deleteBtn = task.querySelector('button')
    task.style.color = 'lightgray';
    task.style.textDecoration = 'line-through';
    deleteBtn.remove();
  })();

  const taskIncomplete = ((element) => {
    const task = element.parentNode;
    const deleteBtn = createDeleteBtn();
    task.appendChild(deleteBtn);
    task.style.color = 'black';
    task.style.textDecoration = 'none';
  })();

  const deleteTask = ((element) => {
    const task = element.parentNode;
    const taskTitle = task.querySelector('.taskTitle')
    tasks = tasks.filter( (x,i) => `task-${i}` !== task.id)
    task.remove();
  })();

  export {getTaskInfo, taskComplete, taskIncomplete, deleteTask}