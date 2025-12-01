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

const nameInp = document.getElementById('name_inp');
const priceInp = document.getElementById('price_inp');
const numInp = document.getElementById('num_inp');
const saveBtn = document.getElementById('save_btn');
const productsDiv = document.getElementById('products');

let users = [];
let editIndex = -1;

saveBtn.addEventListener('click', function () {
	if (editIndex === -1) {
		createItem();
	} else {
		updateItem();
	}
});

function createItem() {
	if (!nameInp.value.trim()) return alert('Kitob nomini kiriting');
	let userObj = {
		name: nameInp.value.trim(),
		price: priceInp.value.trim(),
		number: numInp.value.trim(),
	};
	users.push(userObj);
	clearInputs();
	drawProducts();
}

function updateItem() {
	if (editIndex < 0 || editIndex >= users.length) return;

	users[editIndex] = {
		name: nameInp.value.trim(),
		price: priceInp.value.trim(),
		number: numInp.value.trim(),
	};

	editIndex = -1;
	saveBtn.innerText = 'Save';
	clearInputs();
	drawProducts();
}

function clearInputs() {
	nameInp.value = '';
	priceInp.value = '';
	numInp.value = '';
}

function drawProducts() {
	let html = '';
	for (let i = 0; i < users.length; i++) {
		html += `
      <div class="card p-3 mt-2">
        <h5>${users[i].name}</h5>
        <p>Narxi: ${users[i].price}</p>
        <p>Soni: ${users[i].number}</p>
        <div class="btn-group">
          <button class="btn btn-warning btn-sm" onclick="editItem(${i})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteItem(${i})">Delete</button>
        </div>
      </div>
    `;
	}
	productsDiv.innerHTML = html;
}

function deleteItem(i) {
	users.splice(i, 1);

	if (editIndex === i) {
		editIndex = -1;
		saveBtn.innerText = 'Save';
		clearInputs();
	} else if (editIndex > i) {
		editIndex--;
	}
	drawProducts();
}

function editItem(i) {
	editIndex = i;
	nameInp.value = users[i].name;
	priceInp.value = users[i].price;
	numInp.value = users[i].number;
	saveBtn.innerText = 'Update';

	nameInp.focus();
}
