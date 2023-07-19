// Mock user data for login
const mockUser = {
  email: 'user@example.com',
  password: 'password123',
};

let currentUser = null;

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === mockUser.email && password === mockUser.password) {
    currentUser = email;

    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('taskForm').style.display = 'block';

    loadTasks();
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', function () {
      if (this.checked) {
        taskItem.classList.add('completed');
      } else {
        taskItem.classList.remove('completed');
      }
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);

    document.getElementById('taskList').appendChild(taskItem);

    taskInput.value = '';
  }
}

function loadTasks() {
  // You can load tasks from a server here or use browser storage
  // For simplicity, we'll just add some sample tasks
  const sampleTasks = ['Task 1', 'Task 2', 'Task 3'];

  const taskList = document.getElementById('taskList');

  sampleTasks.forEach(taskText => {
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', function () {
      if (this.checked) {
        taskItem.classList.add('completed');
      } else {
        taskItem.classList.remove('completed');
      }
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);

    taskList.appendChild(taskItem);
  });
}