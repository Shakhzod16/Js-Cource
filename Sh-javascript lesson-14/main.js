// const saveBtn = document.getElementById('save_btn');
// const nameInp = document.getElementById('name_inp');
// const ageInp = document.getElementById('age_inp');
// const countryInp = document.getElementById('county_inp');
// const regionInp = document.getElementById('region_inp');
// const tbody = document.getElementById('tbody');
// const searchInp = document.getElementById('search_inp');
// const searchbtn = document.getElementById('search_btn');

// saveBtn.addEventListener('click', save);
// searchbtn.addEventListener('click', handleSearch);
// let users = [];

// function save() {
// 	let userObj = {
// 		name: nameInp.value,
// 		age: +ageInp.value,
// 		country: countryInp.value,
// 		region: regionInp.value,
// 	};
// 	users.push(userObj);
// 	clearForm();
// 	draw(users);
// }

// function plus(index) {
// 	let a = users[index];
// 	a.age++;
// 	draw(users);
// }
// function minus(index) {
// 	if (users[index].age > 0) {
// 		users[index].age--;
// 	}
// 	draw(users);
// }
// function handleSearch() {
// 	let search = searchInp.value.toUpperCase();
// 	let filter = users.filter(item => item.name.toUpperCase().includes(search));
// 	draw(filter);
// }

// function draw(array) {
// 	let res = '';
// 	for (let i = 0; i < array.length; i++) {
// 		res += `
//   <tr>
//   <td>${array[i].name}</td>
//   <td>
//   <button onclick='plus(${i})' class='btn btn-primary'>+</button>
//   ${array[i].age}
//   <button onclick='minus(${i})'' class='btn btn-success'>-</button>
//   </td>
//   <td>${array[i].country}</td>
//   <td>${array[i].region}</td>
//   <td>
//   <button class="btn btn-danger">🗑️</button>
//   <butto class= 'btn btn-warning'>✏️</button>
//   </td>
//   </tr>

//     `;
// 	}
// 	tbody.innerHTML = res;
// }

// function clearForm() {
// 	nameInp.value = '';
// 	ageInp.value = '';
// 	countryInp.value = '';
// 	regionInp.value = '';
// }

// <!-- ================  Homework ================ -->

const addBtn = document.getElementById('add_btn');
const nameInp = document.getElementById('name_inp');
const modelInp = document.getElementById('model_inp');
const colorInp = document.getElementById('color_inp');
const priceInp = document.getElementById('price_inp');
const tbody = document.getElementById('tbody');
const searchInp = document.getElementById('search_inp');
const searchbtn = document.getElementById('search_btn');

addBtn.addEventListener('click', addCar);
searchbtn.addEventListener('click', handleSearch);
let users = [];
let soqchi = '';

function addCar() {
	let userObj = {
		name: nameInp.value,
		model: modelInp.value,
		color: colorInp.value,
		price: +priceInp.value,
	};
	if (soqchi === '') {
		users.push(userObj);
	} else {
		users[soqchi] = userObj;
		soqchi = '';
	}
	clearForm();
	draw(users);
}
function deleteUser(index) {
	users.splice(index, 1);
	draw(users);
}
function updateUser(index) {
	let editUser = users[index];
	nameInp.value = editUser.name;
	modelInp.value = editUser.model;
	colorInp.value = editUser.color;
	priceInp.value = editUser.price;
	soqchi = index;
}

function handleSearch() {
	let search = searchInp.value.toUpperCase();
	let filter = users.filter(item => item.name.toUpperCase().includes(search));
	draw(filter);
}

function draw(array) {
	let res = '';
	for (let i = 0; i < array.length; i++) {
		res += `
  <tr>
  <td>${array[i].name}</td>
  <td>${array[i].model}</td>
  <td>${array[i].color}</td>
  <td>${array[i].price}</td>
  <td>
    <button onclick= "deleteUser(${i})" class="btn btn-danger">🗑️</button>
    <button onclick="updateUser(${i})" class="btn btn-warning" >✏️</button>
    </td>
  </tr>

    `;
	}
	tbody.innerHTML = res;
}

function clearForm() {
	nameInp.value = '';
	modelInp.value = '';
	colorInp.value = '';
	priceInp.value = '';
}
