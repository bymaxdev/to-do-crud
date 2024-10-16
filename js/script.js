const addListBtn = document.getElementById('addTaskBtn');
const todoInput = document.getElementById("newTaskInput");
const todoList = document.getElementById("taskList");


function addTask() {
    const task = todoInput.value.trim();

    const addNewTask = document.createElement('li');
    const checkBox = document.createElement('input');
    const deleteBtn = document.createElement('a');
    const taskText = document.createElement('span');

    checkBox.style.marginRight = '10px';
    checkBox.type = 'checkbox';

    deleteBtn.textContent = "X";
    deleteBtn.style.color = 'red';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.marginLeft = '10px';

    if (task === '') {
        alert('Please enter a task');
        return;
    };

    taskText.textContent = task;

    addNewTask.appendChild(checkBox);
    addNewTask.appendChild(taskText);
    addNewTask.appendChild(deleteBtn);

    todoList.appendChild(addNewTask);

    todoInput.value = '';

    checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    });

    deleteBtn.addEventListener('click', () => {
        addNewTask.remove();
    });
}

addListBtn.addEventListener('click', () => {
    addTask();
    todoInput.value = '';
});


