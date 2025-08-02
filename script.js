document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        //  This is the event listener on the remove button
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }

    //  Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    //  Event listener for pressing Enter inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
