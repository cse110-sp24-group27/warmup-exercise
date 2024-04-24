const fs = require('fs');


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

    const data = fs.readFileSync('data.json');
    const jsonData = JSON.parse(data);
    jsonData.tasks.push({
        checkbox: false,
        task_name: taskName,
        due_date: taskDate,
        priority: taskPriority
    });

    fs.writeFileSync('data.json', JSON.stringify(jsonData));

    
    let taskListTable = document.getElementsByClassName('task-list')[0];
    
    taskListTable.replaceChildren();
    load_tasks();
    
}