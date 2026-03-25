let tasks = [];

// DOM elements
const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#submit');
const listContainer = document.querySelector('#list-container');

// Create and render a task in the DOM
function addTask(task) {

  // Create main task container
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  // Create input to display task text
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = task.text;
  taskInput.setAttribute('readonly', 'readonly');
  taskInput.classList.add('task-text');

  // Container for action buttons (only 'delete' currently)
  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('action-items');

  // Create completion toggle (check circle)
  const doneCircle = document.createElement('i');
  doneCircle.classList.add('check-circle');

  // If task is already completed, reflect in UI
  if (task.completed) {
    doneCircle.classList.add('done');
    taskInput.classList.add('done');
  }

  // Delete button
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'x';

  // Build the task structure in the DOM
  actionsDiv.appendChild(deleteBtn);

  taskItem.appendChild(doneCircle);
  taskItem.appendChild(taskInput);
  taskItem.appendChild(actionsDiv);

  listContainer.appendChild(taskItem);

  // Toggle task comepletion state when clicked
  doneCircle.addEventListener('click', () => {
    doneCircle.classList.toggle('done');
    taskInput.classList.toggle('done');
    
    // Update underlying data model
    task.completed = !task.completed;

    // Persist updated tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  // Delete task from DOM and data model
  deleteBtn.addEventListener('click', () => {
    listContainer.removeChild(taskItem);

    // Remove task from array
    tasks = tasks.filter(t => t !== task);

    // Update local storage after deletion
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}

// Adds a new task when button is clicked
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  
   // Prevent empty tasks
   if(taskText !== '') {
    const newTask = {
     text: taskText,
     completed: false
   };

   // Add to task array and persist
   tasks.push(newTask);
   localStorage.setItem('tasks', JSON.stringify(tasks));

   // Render task in UI
   addTask(newTask);

   // Clear inout field
   input.value = '';
  }
});

// Add taks with enter key
input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    addBtn.click();
  }
});

// Load tasks from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const storedTasks = localStorage.getItem('tasks');

  if(storedTasks) {
     tasks = JSON.parse(storedTasks);

     // Render each stored task
     tasks.forEach(task => {
      addTask(task)
    });
  }
});
