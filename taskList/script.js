function load_tasks() {
    fetch('tasks.json')
        .then(response => response.json())
        .then(tasks => {
            let taskListTable = document.getElementsByClassName('task-list')[0];
            console.log(taskListTable); //debug line, checking on json data

            tasks.forEach(task => {
                //for each task, create row <tr>, create other <td> elements to added to row. finally append row to the taskListTable
                const row = document.createElement('tr');

                const checkboxCell = document.createElement('td');
                checkboxCell.classList.add('check-box');
                const checkboxInput = document.createElement('input');
                checkboxInput.type = 'checkbox';
                checkboxInput.checked = task.checkbox;
                checkboxCell.appendChild(checkboxInput);
                row.appendChild(checkboxCell);

                const taskNameCell = document.createElement('td');
                taskNameCell.classList.add('task-name');
                taskNameCell.textContent = task.task_name;
                row.appendChild(taskNameCell);
                
                const dueDateCell = document.createElement('td');
                dueDateCell.classList.add('due-date');
                dueDateCell.textContent = task.due_date;
                row.appendChild(dueDateCell);
                
                const priorityCell = document.createElement('td');
                priorityCell.classList.add('priority');
                priorityCell.textContent = task.priority;
                row.appendChild(priorityCell);
                
                taskListTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error loading tasks:', error);
        });
}