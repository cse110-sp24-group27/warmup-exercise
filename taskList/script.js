function get_row_from_data(checkbox, task_name, due_date, priority) {
    const row = document.createElement('tr');

    const checkboxCell = document.createElement('td');
    checkboxCell.classList.add('check-box');
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.checked = checkbox;
    checkboxCell.appendChild(checkboxInput);
    row.appendChild(checkboxCell);

    const taskNameCell = document.createElement('td');
    taskNameCell.classList.add('task-name');
    taskNameCell.textContent = task_name;
    row.appendChild(taskNameCell);
    
    const dueDateCell = document.createElement('td');
    dueDateCell.classList.add('due-date');
    dueDateCell.textContent = due_date;
    row.appendChild(dueDateCell);
    
    const priorityCell = document.createElement('td');
    priorityCell.classList.add('priority');
    priorityCell.textContent = priority;
    row.appendChild(priorityCell);
    
    return row;
}

function load_tasks() {
    fetch('tasks.json')
        .then(response => response.json())
        .then(tasks => {
            let taskListTable = document.getElementsByClassName('task-list')[0];
            console.log(taskListTable); //debug line, checking on json data

            tasks.forEach(task => {
                //for each task, create row <tr>, create other <td> elements to added to row. finally append row to the taskListTable
                const row = get_row_from_data(task.checkbox, task.task_name, task.due_date, task.priority)
                
                taskListTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error loading tasks:', error);
        });
}


function new_task() {
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