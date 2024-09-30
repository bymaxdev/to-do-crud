const addListBtn = document.getElementById('addTaskBtn');

addListBtn.addEventListener('click', () => {
    const task = document.getElementById('newTaskInput').value;
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = task;
    taskList.appendChild(newTask);
    document.getElementById('newTaskInput').value = '';
});


