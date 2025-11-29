// LOCAL STORAGE

// let result = localStorage.getItem('salom');
// let user = { name: 'ali', age: 12 };

// localStorage.setItem('salom', JSON.stringify(user));

// let obj = localStorage.getItem('salom');
// console.log(JSON.parse(obj));

// localStorage.removeItem("ketmon1")
// localStorage.clear()

// =======================================
// <!-- Homework - Task - 1 -->

// const nameInp = document.getElementById('name_inp');
// const ageInp = document.getElementById('age_inp');

// const saveBtn = document.getElementById('save_btn');

// const tbody = document.getElementById('tbody');

// saveBtn.addEventListener('click', save);
// let users = [];
// if (localStorage.getItem('users')) {
// 	users = JSON.parse(localStorage.getItem('users'));
// } else {
// 	users = [];
// }

// let soqchi = '';

// function save() {
// 	let userObj = {
// 		name: nameInp.value,
// 		age: ageInp.value,
// 	};
// 	if (soqchi === '') {
// 		users.push(userObj);
// 	} else {
// 		users[soqchi] = userObj;
// 		soqchi = '';
// 	}
// 	saveByLocal();
// 	draw();
// 	clearForm();
// }
// function deleteUser(index) {
// 	users.splice(index, 1);
// 	draw();
// 	saveByLocal();
// }
// function updateUser(index) {
// 	soqchi = index;
// 	let current = users[index];
// 	nameInp.value = current.name;
// 	ageInp.value = current.age;

// 	draw();
// }

// draw();

// function draw() {
// 	let result = '';
// 	for (let i = 0; i < users.length; i++) {
// 		result += `
//     <tr>
//     <td>${i + 1}</td>
//     <td>${users[i].name}</td>
//     <td>${users[i].age}</td>
//     <td>
//     <button onclick="deleteUser(${i})" class =" btn btn-danger">🗑️</button>
//     <button  onclick="updateUser(${i})" class="btn btn-warning">✏️</button>
//     </td>
//     </tr>
//     `;
// 	}
// 	tbody.innerHTML = result;
// }

// function clearForm() {
// 	nameInp.value = '';
// 	ageInp.value = '';
// }

// function saveByLocal() {
// 	localStorage.setItem('users', JSON.stringify(users));
// }

// <!-- Homework - Task - 2 -->

// const numInp = document.getElementById('num_inp');
// const title = document.getElementById('title');

// function test(e) {
// 	let son = +e.target.value;
// 	draw(son);
// }

// function draw(son) {
// 	let s = '';
// 	for (let i = 1; i <= son; i++) {
// 		s += `<span class="${i % 2 !== 0 ? 'strike' : 'normal'}">Salom</span> `;
// 	}
// 	title.innerHTML = s;
// }

// <!-- Homework - Task - 3 -->
