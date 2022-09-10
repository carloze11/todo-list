const task = (title, description, dueDate = "No date", priority = "Low") => {
    return {title, description, dueDate, priority}
}

const createTask = () => {
    const newTask = task(
        document.getElementById('title').value,
        document.getElementById('description').value,
        document.getElementById('dueDate').value,
        document.getElementById('priority'.value)
    );

    return newTask;
}


export default createTask;