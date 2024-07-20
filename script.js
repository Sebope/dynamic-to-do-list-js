document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create new list item
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event to remove button
            removeButton.onclick = function() {
                taskItem.remove();
            };

            // Append remove button to list item
            taskItem.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(taskItem);

            // Clear task input
            taskInput.value = '';
        } else {
            // Alert user if taskText is empty
            alert('Please enter a task!');
        }
    }

    // Event listener for Add Task button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press on task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial call to addTask when DOM is loaded (for any existing tasks)
    addTask();
});
