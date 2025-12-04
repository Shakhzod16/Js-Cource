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

const nameInp = document.getElementById('name_inp');
const ageInp = document.getElementById('age_inp');

const saveBtn = document.getElementById('save_btn');

const tbody = document.getElementById('tbody');

saveBtn.addEventListener('click', save);
let users = [];
if (localStorage.getItem('users')) {
	users = JSON.parse(localStorage.getItem('users'));
} else {
	users = [];
}

let soqchi = '';

function save() {
	let userObj = {
		name: nameInp.value,
		age: ageInp.value,
	};
	if (soqchi === '') {
		users.push(userObj);
	} else {
		users[soqchi] = userObj;
		soqchi = '';
	}
	saveByLocal();
	draw();
	clearForm();
}
function deleteUser(index) {
	users.splice(index, 1);
	draw();
	saveByLocal();
}
function updateUser(index) {
	soqchi = index;
	let current = users[index];
	nameInp.value = current.name;
	ageInp.value = current.age;

	draw();
}

draw();

function draw() {
	let result = '';
	for (let i = 0; i < users.length; i++) {
		result += `
    <tr>
    <td>${i + 1}</td>
    <td>${users[i].name}</td>
    <td>${users[i].age}</td>
    <td>
    <button onclick="deleteUser(${i})" class =" btn btn-danger">🗑️</button>
    <button  onclick="updateUser(${i})" class="btn btn-warning">✏️</button>
    </td>
    </tr>
    `;
	}
	tbody.innerHTML = result;
}

function clearForm() {
	nameInp.value = '';
	ageInp.value = '';
}

function saveByLocal() {
	localStorage.setItem('users', JSON.stringify(users));
}

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

// const box = document.getElementById('box');

// function test(e) {
// 	let color = e.target.value;
// 	draw(color);
// }

// function draw(son) {
// 	if (son === 'BLUE') {
// 		box.style.backgroundColor = 'blue';
// 	} else if (son === 'RED') {
// 		box.style.backgroundColor = 'red';
// 	} else if (son === 'BLACK') {
// 		box.style.backgroundColor = 'black';
// 	} else if (son === 'YELLOW') {
// 		box.style.backgroundColor = 'yellow';
// 	} else if (son === 'GREEN') {
// 		box.style.backgroundColor = 'green';
// 	}
// }

// <!-- Homework - Task - 4 -->

// const nameInp = document.getElementById('name_inp');
// const priceInp = document.getElementById('price_inp');
// const numInp = document.getElementById('num_inp');
// const saveBtn = document.getElementById('save_btn');
// const productsDiv = document.getElementById('products');
// const quantitySelect = document.getElementById('quantity');
// const selectedDiv = document.getElementById('selectedQuantity');

// saveBtn.addEventListener('click', save);
// let users = [];
// if (localStorage.getItem('users')) {
// 	users = JSON.parse(localStorage.getItem('users'));
// } else {
// 	users = [];
// }

// let editIndex = '';

// saveBtn.addEventListener('click', save);

// function save() {
// 	const obj = {
// 		name: nameInp.value,
// 		price: priceInp.value,
// 		number: numInp.value,
// 	};

// 	if (editIndex === '') {
// 		users.push(obj);
// 	} else {
// 		users[editIndex] = obj;
// 		editIndex = '';
// 	}
// 	saveByLocal();
// 	clearInput();
// 	draw();
// }

// function clearInput() {
// 	nameInp.value = '';
// 	priceInp.value = '';
// 	numInp.value = '';
// }
// draw();

// function draw() {
// 	let res = '';
// 	for (let i = 0; i < users.length; i++) {
// 		res += `
//       <div class="card p-3 mt-2">
//         <h5>${users[i].name}</h5>
//         <p>Narxi: ${users[i].price}</p>
//         <p>Soni: ${users[i].number}</p>
//         <div class="btn-group">
//           <button class="btn btn-warning btn-sm" onclick="editItem(${i})">Edit</button>
//           <button class="btn btn-danger btn-sm" onclick="deleteItem(${i})">Delete</button>
//         </div>
//       </div>
//     `;
// 	}
// 	productsDiv.innerHTML = res;
// }

// function deleteItem(index) {
// 	users.splice(index, 1);
// 	draw();
// 	saveByLocal();
// }

// function editItem(index) {
// 	editIndex = index;
// 	nameInp.value = users[index].name;
// 	priceInp.value = users[index].price;
// 	numInp.value = users[index].number;
// }

// function saveByLocal() {
// 	localStorage.setItem('users', JSON.stringify(users));
// }

// // // ===========================================

// for (let i = 1; i <= 5; i++) {
// 	const option = document.createElement('option');
// 	option.value = i;
// 	option.textContent = i;
// 	quantitySelect.appendChild(option);
// }


// quantitySelect.addEventListener('change', e => {
// 	selectedDiv.textContent = 'Tanlangan quantity: ' + e.target.value;
// });