let tasks = [];

// Access input field and Add button
const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#submit');
const listContainer = document.querySelector('#list-container');








// Function to create a new task item
function addTask(task) {

  // Create main task item div
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');




  // Create input for task text
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = task.text;
  taskInput.setAttribute('readonly', 'readonly');
  taskInput.classList.add('task-text');




  // Create action items container
  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('action-items');




  // Create done circle
  const doneCircle = document.createElement('i');
  doneCircle.classList.add('check-circle');


  if(task.completed) {
  doneCircle.classList.add('done');
  taskInput.classList.add('done');
}





  // Create delete button
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'x';





  // Append elements
  //actionsDiv.appendChild(doneCircle);
  actionsDiv.appendChild(deleteBtn);

  taskItem.appendChild(doneCircle);
  taskItem.appendChild(taskInput);
  taskItem.appendChild(actionsDiv);

  listContainer.appendChild(taskItem);





  // Event listeners
  doneCircle.addEventListener('click', () => {

    doneCircle.classList.toggle('done');       // adds checkmark
    taskInput.classList.toggle('done');   
    
    task.completed = !task.completed; // toggle completed status

    localStorage.setItem('tasks', JSON.stringify(tasks)); // update localStorage
  });


  // Delete task
  deleteBtn.addEventListener('click', () => {
    
    listContainer.removeChild(taskItem);

    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}





// Event listener for Add button
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if(taskText !== '') {
    //addTask(taskText);

   // tasks.push(taskText);
    //localStorage.setItem('tasks', JSON.stringify(tasks));

   const newTask = {
    text: taskText,
    completed: false
};

tasks.push(newTask);
localStorage.setItem('tasks', JSON.stringify(tasks));

addTask(newTask);

    input.value = '';
  }
});






// Optional: press Enter to add task
input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    addBtn.click();
  }
});


window.addEventListener('DOMContentLoaded', () => {

    const storedTasks = localStorage.getItem('tasks');

    if(storedTasks) {
        tasks = JSON.parse(storedTasks);

        tasks.forEach(task => {
            addTask(task)
    });
    
}
});
