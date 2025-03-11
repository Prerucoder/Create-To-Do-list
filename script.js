document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskContent) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        // Task text
        const taskText = document.createElement('span');
        taskText.textContent = taskContent;
        taskItem.appendChild(taskText);

        // Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        taskItem.appendChild(removeButton);

        // Mark as completed when clicked
        taskText.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Remove task when remove button is clicked
        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Append the task item to the list
        taskList.appendChild(taskItem);
    }

    // Event listener to add a new task when the button is clicked
    addButton.addEventListener('click', () => {
        const taskContent = taskInput.value.trim();
        if (taskContent) {
            addTask(taskContent);
            taskInput.value = ''; // Clear the input field
        }
    });

    // Allow pressing "Enter" key to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskContent = taskInput.value.trim();
            if (taskContent) {
                addTask(taskContent);
                taskInput.value = ''; // Clear the input field
            }
        }
    });
});
