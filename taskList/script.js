function get_row_from_data(checkbox, task_name, due_date, priority) {
    // Creates Row
    const row = document.createElement('tr');

    // Create Check Box to be placed under "Done" column.
    const checkboxCell = document.createElement('td');
    checkboxCell.classList.add('check-box');
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    
    checkboxInput.checked = checkbox;
    
//either remove_task or cross_row when checkbox is clicked
    // checkboxInput.addEventListener('change', remove_task);  
    checkboxInput.addEventListener('change', cross_row);

    checkboxCell.appendChild(checkboxInput);
    row.appendChild(checkboxCell);

    // Create Task to be placed under "Task" column.
    const taskNameCell = document.createElement('td');
    taskNameCell.classList.add('task-name');
    taskNameCell.textContent = task_name;
    row.appendChild(taskNameCell);

    // Create Due Date to be placed under "Due Date" column.
    const dueDateCell = document.createElement('td');
    dueDateCell.classList.add('due-date');
    dueDateCell.textContent = due_date;
    row.appendChild(dueDateCell);

    // Create Priority to be placed under "Priority" column.
    const priorityCell = document.createElement('td');
    priorityCell.classList.add('priority');
    priorityCell.textContent = priority;
    row.appendChild(priorityCell);

    // Return the whole row to be added to the list.
    return row;
}

function load_tasks() {
    fetch('tasks.json')
        .then(response => response.json())
        .then(tasks => {
            let taskListTable = document.getElementsByClassName('task-list')[0];
            console.log(taskListTable); //debug line, checking on json data

            tasks.forEach(task => {
                // For each task, 1) create row <tr>, 2) create <td> elements to add, 
                const row = get_row_from_data(task.checkbox, task.task_name, task.due_date, task.priority)
                // 3) Add row to taskListTable
                taskListTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error loading tasks:', error);
        });
}

function new_task() {
    // Fetch data to build the new task
    const form = document.querySelector('.new-task-row');
    form.style.display = (form.style.display === 'flex' ? 'none' : 'flex'); // Toggle display
}

function add_task() {
    const taskName = document.getElementById('form-name').value;
    const taskDate = document.getElementById('form-date').value;
    const taskPriority = document.getElementById('form-priority').value;

    //console.log('Task: ' + taskName + '\nDate: ' + taskDate + '\nPriority: ' + taskPriority);
    
    document.querySelector('.new-task-row').style.display = 'none';

    let taskListTable = document.getElementsByClassName('task-list')[0];
    const row = get_row_from_data(false, taskName, taskDate, taskPriority);
    taskListTable.appendChild(row);
    
}

// Mark as Completed //
// function remove_task() {
//     console.log('Box was Checked!');    
//     this.remove();
// }

function remove_task(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        const row = checkbox.closest('tr');
        row.remove();
    }
}
function cross_row(event) {
    const checkbox = event.target;
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.style.textDecoration = 'line-through'; // Apply line-through style if checkbox is checked
    }  else {
        row.style.textDecoration = 'none'; // Remove line-through style if checkbox is unchecked
    }
}