// Wait until DOM content is fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return; // Stop function if input is empty
        }

        // Create new list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Attach event to remove the task on click
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);

        // Append list item to the task list
        taskList.appendChild(li);

        // Clear the input field for next task
        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter key in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
