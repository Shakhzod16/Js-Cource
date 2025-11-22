// const nameInput = document.getElementById('name_inp');
// const yearInput = document.getElementById('year_inp');
// const colorInput = document.getElementById('color_inp');
// const saveBtn = document.getElementById('save-btn');
// const result = document.getElementById('result');

// let cars = [
// 	{ name: 'Damas', year: 2030, color: 'success' },
// 	{ name: 'Malibu', year: 2021, color: 'primary' },
// 	{ name: 'cobalt', year: 2022, color: 'warning' },
// ];

// saveBtn.addEventListener('click', save);

// function save() {
// 	let carObj = {
// 		name: nameInput.value,
// 		year: +yearInput.value,
// 		color: colorInput.value,
// 	};
// 	cars.push(carObj);
// 	draw();
// }

// function draw() {
// 	let res = '';
// 	for (let i = 0; i < cars.length; i++) {
// 		res += `<h1 class='border bg-${cars[i].color}'> ${cars[i].name} ${cars[i].year} ${cars[i].color}</h1>`;
// 	}
// 	result.innerHTML = res;
// }

// draw();

// CRUD = Creat read update delete

// =============================

const nameInput = document.getElementById('name_inp');
const ageInput = document.getElementById('age_inp');
const emailInput = document.getElementById('email_inp');
const saveBtn = document.getElementById('save_btn');
const tbody = document.getElementById('tbody');

saveBtn.addEventListener('click', save);
let users = [];
let soqchi = '';

function save() {
	let userObj = {
		name: nameInput.value,
		age: +ageInput.value,
		email: emailInput.value,
	};
	if (soqchi === '') {
		users.push(userObj);
	} else {
		users[soqchi] = userObj;
		soqchi = '';
	}
	changeBtnText();
	draw();
	clearForm();
}

function deleteUser(index) {
	users.splice(index, 1);
	draw();
}
function updateUser(index) {
	let editUser = users[index];
	nameInput.value = editUser.name;
	ageInput.value = editUser.age;
	emailInput.value = editUser.email;
	soqchi = index;
	changeBtnText();
}

function draw() {
	let result = '';
	for (let i = 0; i < users.length; i++) {
		result += `<tr>
		<td>${i + 1}</td>
		<td>${users[i].name}</td>
		<td>${users[i].age}</td>
		<td>${users[i].email}</td>
    <td>
    <button onclick= "deleteUser(${i})" class="btn btn-danger">🗑️</button>
    <button onclick="updateUser(${i})" class="btn btn-warning" >✏️</button>
    </td>
		</tr>`;
	}
	tbody.innerHTML = result;
}

function clearForm() {
	nameInput.value = '';
	ageInput.value = '';
	emailInput.value = '';
}

function changeBtnText() {
	if (soqchi === '') {
		saveBtn.innerText = 'Save';
		saveBtn.classList.remove('btn-primary');
		saveBtn.classList.add('btn-dark');
	} else {
		saveBtn.innerText = 'Update';
		saveBtn.classList.remove('btn-dark');
		saveBtn.classList.add('btn-primary');
	}
}

// Homework

// const saveBtn = document.getElementById('save_btn');
// const text = document.getElementById('text');
// const nameInp = document.getElementById('name_inp');
// const taskArea = document.getElementById('task');

// saveBtn.addEventListener('click', save);
// let tasks = [];
// let soqchi = '';

// function save() {
// 	let taskObj = {
// 		name: nameInp.value,
// 		text: text.value,
// 	};

// 	if (soqchi === '') {
// 		tasks.push(taskObj);
// 	} else {
// 		tasks[soqchi] = taskObj;
// 		soqchi = '';
// 	}

// 	draw();
// 	clearForm();
// }

// function deleteTask(index) {
// 	tasks.splice(index, 1);
// 	draw();
// }
// function updateTask(index) {
// 	let editingTask = tasks[index];
// 	nameInp.value = editingTask.name;
// 	text.value = editingTask.text;
// 	soqchi = index;
// }

// function draw() {
// 	let res = '';
// 	for (let i = 0; i < tasks.length; i++) {
// 		res += `	<div class='card shadow-sm w-25'>
// 				<div class='card-body'>
// 					<h1>${tasks[i].name}</h1>
// 					<p>${tasks[i].text}</p>
// 				</div>
// 				<div class= "p-2 btn-group" >
//        <button onclick= 'deleteTask(${i})' class= 'btn btn-danger'>x</button>
//        <button onclick= 'updateTask(${i})' class= 'btn btn-warning'>edit</button>
//        </div>
// 			</div>`;
// 	}
// 	taskArea.innerHTML = res;
// }
// function clearForm() {
// 	nameInp.value = '';
// 	text.value = '';
// }
