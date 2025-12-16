// let input = document.getElementById('input');
// let img = document.getElementById('img');

// input.addEventListener('change', handleFile);

// function handleFile() {
// 	let myFile = event.target.files[0];
// 	convertToBase64(myFile);
// }

// function convertToBase64(file) {
// 	let fileReader = new FileReader();
// 	fileReader.onload = function (e) {
// 		let base64Url = e.target.result;
// 		img.src = base64Url;
// 	};
// 	fileReader.readAsDataURL(file);
// }

// ==========================================
// const box = document.getElementById('box');

// const redSection = document.getElementById('red_section');
// const blueSection = document.getElementById('blue_section');

// let status = 'BLUE';

// function draw() {
// 	if (status === 'BLUE') {
// 		blueSection.innerHTML = `<div draggable='true' id='box' class='box'></div>`;
// 		redSection.innerHTML = '';
// 	} else if (status === 'RED') {
// 		redSection.innerHTML = `<div draggable='true' id='box' class='box'></div>`;
// 		blueSection.innerHTML = '';
// 	}
// }

// draw();

// function ruhsat(e) {
// 	e.preventDefault();
// }

// function tashlandi(myStatus) {
// 	status = myStatus;
// 	draw();
// }

// function saveByLocal() {
// 	localStorage.setItem('status', JSON.stringify('status'));
// }

//

// ======================== Leson =======================

// const titleInp = document.getElementById('title_inp');
// const dateInp = document.getElementById('date_inp');
// const saveBtn = document.getElementById('save_btn');

// const newTasks = document.getElementById('new_tasks');
// const progressTasks = document.getElementById('progress_tasks');
// const finishTasks = document.getElementById('finish_tasks');

// saveBtn.addEventListener('click', save);

// let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

// let currentIndex;

// let soqchi = '';

// function save() {
// 	let taskObj = {
// 		title: titleInp.value,
// 		date: dateInp.value,
// 		status: 'NEW',
// 	};
// 	if (soqchi === '') {
// 		tasks.push(taskObj);
// 	} else {
// 		tasks[soqchi].title = taskObj.title;
// 		tasks[soqchi].date = taskObj.date;
// 		soqchi = '';
// 	}

// 	draw();
// 	saveByLocal();
// 	clearForm();
// }

// function draw() {
// 	let s1 = '';
// 	let s2 = '';
// 	let s3 = '';

// 	for (let i = 0; i < tasks.length; i++) {
// 		let task = `
//    	<div draggable='true' ondrag='tutibOl(${i})' class="border rounded py-1 px-4 d-flex justify-content-between align-content-center">
// 			<h1 class="fs-3">${tasks[i].title}</h1>
// 			<p>${tasks[i].date}</p>

// 			<div>
// 				<button onclick="deleteTask(${i})" class="btn btn-danger">🗑️</button>
// 				<button onclick="editTask(${i})" class="btn btn-warning">✏️</button>
// 			</div>
// 		</div>
//     `;

// 		if (tasks[i].status === 'NEW') {
// 			s1 += task;
// 		} else if (tasks[i].status === 'PROGRESS') {
// 			s2 += task;
// 		} else if (tasks[i].status === 'FINISH') {
// 			s3 += task;
// 		}
// 	}

// 	newTasks.innerHTML = s1;
// 	progressTasks.innerHTML = s2;
// 	finishTasks.innerHTML = s3;
// }

// function saveByLocal() {
// 	localStorage.setItem('tasks', JSON.stringify(tasks));
// }
// draw();

// function clearForm() {
// 	titleInp.value = '';
// 	dateInp.value = '';
// }

// function deleteTask(index) {
// 	tasks.splice(index, 1);
// 	draw();
// 	saveByLocal();
// }

// function ruhsat(e) {
// 	e.preventDefault();
// }
// function tashlandi(status) {
// 	tasks[currentIndex].status = status;
// 	saveByLocal();
// 	draw();
// }

// function tutibOl(index) {
// 	currentIndex = index;
// }

// function editTask(index) {
// 	soqchi = index;
// 	let curresnTask = tasks[index];
// 	titleInp.value = curresnTask.title;
// 	dateInp.value = curresnTask.date;
// }

// <!-- ===================== Homework ======================= -->

const todoInput = document.getElementById('todo_inp');
const todoBtn = document.getElementById('todo_btn');
const todoList = document.getElementById('todo_list');
const todoCount = document.getElementById('todo_count');

const progressInput = document.getElementById('progress_inp');
const progressBtn = document.getElementById('inprogress_btn');
const progressList = document.getElementById('progress_list');
const progressCount = document.getElementById('progress_count');

const doneInput = document.getElementById('done_inp');
const doneBtn = document.getElementById('completed_btn');
const doneList = document.getElementById('done_list');
const doneCount = document.getElementById('done_count');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const updateCounters = () => {
	todoCount.textContent = tasks.filter(t => t.status === 'todo').length;
	progressCount.textContent = tasks.filter(t => t.status === 'progress').length;
	doneCount.textContent = tasks.filter(t => t.status === 'done').length;
};

const drawTasks = () => {
	todoList.innerHTML = '';
	progressList.innerHTML = '';
	doneList.innerHTML = '';

	tasks.forEach((task, index) => {
		const div = document.createElement('div');
		div.className = 'border rounded p-2 mb-2 d-flex justify-content-between';
		div.textContent = task.title;
		div.draggable = true;
		div.dataset.index = index;

		const delBtn = document.createElement('button');
		delBtn.className = 'btn btn-danger btn-sm';
		delBtn.textContent = '🗑️';
		delBtn.addEventListener('click', () => {
			tasks.splice(index, 1);
			saveTasks();
			drawTasks();
		});
		div.appendChild(delBtn);

		div.addEventListener('dragstart', () => div.classList.add('dragging'));
		div.addEventListener('dragend', () => div.classList.remove('dragging'));

		if (task.status === 'todo') todoList.appendChild(div);
		else if (task.status === 'progress') progressList.appendChild(div);
		else doneList.appendChild(div);
	});

	updateCounters();
};

const saveTasks = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = (title, status) => {
	if (!title.trim()) return;
	tasks.push({ title: title, status: status });
	saveTasks();
	drawTasks();
};

const enableDragDrop = (list, status) => {
	list.addEventListener('dragover', e => e.preventDefault());
	list.addEventListener('drop', () => {
		const dragged = document.querySelector('.dragging');
		if (!dragged) return;

		const index = parseInt(dragged.dataset.index);
		tasks[index].status = status;
		saveTasks();
		drawTasks();
	});
};

todoBtn.addEventListener('click', () => {
	addTask(todoInput.value, 'todo');
	todoInput.value = '';
});
progressBtn.addEventListener('click', () => {
	addTask(progressInput.value, 'progress');
	progressInput.value = '';
});
doneBtn.addEventListener('click', () => {
	addTask(doneInput.value, 'done');
	doneInput.value = '';
});

todoInput.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		addTask(todoInput.value, 'todo');
		todoInput.value = '';
	}
});
progressInput.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		addTask(progressInput.value, 'progress');
		progressInput.value = '';
	}
});
doneInput.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		addTask(doneInput.value, 'done');
		doneInput.value = '';
	}
});

enableDragDrop(todoList, 'todo');
enableDragDrop(progressList, 'progress');
enableDragDrop(doneList, 'done');

drawTasks();
