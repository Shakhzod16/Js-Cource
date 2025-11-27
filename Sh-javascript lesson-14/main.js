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

// const addBtn = document.getElementById('add_btn');
// const nameInp = document.getElementById('name_inp');
// const modelInp = document.getElementById('model_inp');
// const colorInp = document.getElementById('color_inp');
// const priceInp = document.getElementById('price_inp');
// const tbody = document.getElementById('tbody');
// const searchInp = document.getElementById('search_inp');
// const searchbtn = document.getElementById('search_btn');

// addBtn.addEventListener('click', addCar);
// searchbtn.addEventListener('click', handleSearch);
// let users = [];
// let soqchi = '';

// function addCar() {
// 	let userObj = {
// 		name: nameInp.value,
// 		model: modelInp.value,
// 		color: colorInp.value,
// 		price: +priceInp.value,
// 	};
// 	if (soqchi === '') {
// 		if (nameInp.value == "" && modelInp.value == "" && colorInp.value == "" && priceInp.value == "") {
// 			return;
// 		}
// 		users.push(userObj);
// 	} else {
// 		users[soqchi] = userObj;
// 		soqchi = '';
// 	}
// 	clearForm();
// 	draw(users);
// }
// function deleteUser(index) {
// 	users.splice(index, 1);
// 	draw(users);
// }
// function updateUser(index) {
// 	let editUser = users[index];
// 	nameInp.value = editUser.name;
// 	modelInp.value = editUser.model;
// 	colorInp.value = editUser.color;
// 	priceInp.value = editUser.price;
// 	soqchi = index;
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
//   <td>${array[i].model}</td>
//   <td>${array[i].color}</td>
//   <td>${array[i].price}</td>
//   <td>
//     <button onclick= "deleteUser(${i})" class="btn btn-danger">🗑️</button>
//     <button onclick="updateUser(${i})" class="btn btn-warning" >✏️</button>
//     </td>
//   </tr>

//     `;
// 	}
// 	tbody.innerHTML = res;
// }

// function clearForm() {
// 	nameInp.value = '';
// 	modelInp.value = '';
// 	colorInp.value = '';
// 	priceInp.value = '';
// }

// <!-- Homework - Task -->

const studentInp = document.getElementById('student_inp');
const childInp = document.getElementById('child_inp');

const englishInp = document.getElementById('english_inp');
const russionInp = document.getElementById('russion_inp');
const uzbekInp = document.getElementById('uzbek_inp');

const colorInp = document.getElementById('color_inp');
const descriptionInp = document.getElementById('description_inp');
const tbody = document.getElementById('tbody');

const saveBtn = document.getElementById('save_btn');

const firstName = document.getElementById('firstname_inp');
const lastName = document.getElementById('lastname_inp');
const ageInp = document.getElementById('age_inp');
const genderInp = document.getElementById('gender_inp');

const searchInp = document.getElementById('search_inp');
const searchBtn = document.getElementById('search_btn');

saveBtn.addEventListener('click', save);
searchBtn.addEventListener('click', handleSearch);

let users = [];
let soqchi = '';

function save() {
	let userType;
	let userLanguages = [];

	if (studentInp.checked) {
		userType = 'Student';
	} else if (childInp.checked) {
		userType = 'Child';
	}

	if (englishInp.checked) {
		userLanguages.push('English');
	}
	if (russionInp.checked) {
		userLanguages.push('Russian');
	}
	if (uzbekInp.checked) {
		userLanguages.push('Uzbek');
	}

	let userObj = {
		firstName: firstName.value,
		lastName: lastName.value,
		age: +ageInp.value,
		gender: genderInp.value,
		userType,
		languages: userLanguages,
		color: colorInp.value,
		description: descriptionInp.value,
	};

	if (soqchi === '') {
		users.push(userObj);
	} else {
		users[soqchi] = userObj;
		soqchi = '';
	}

	draw(users);
	formClear();
}

function deleteUser(index) {
	users.splice(index, 1);
	draw(users);
}

function updateUser(index) {
	soqchi = index;
	let currenUser = users[index];

	firstName.value = currenUser.firstName;
	lastName.value = currenUser.lastName;
	ageInp.value = currenUser.age;
	genderInp.value = currenUser.gender;

	if (currenUser.userType === 'Student') {
		studentInp.checked = true;
	} else if (currenUser.userType === 'Child') {
		childInp.checked = true;
	}

	englishInp.checked = currenUser.languages.includes('English');
	russionInp.checked = currenUser.languages.includes('Russian');
	uzbekInp.checked = currenUser.languages.includes('Uzbek');

	colorInp.value = currenUser.color;
	descriptionInp.value = currenUser.description;
}

function handleSearch() {
	let text = searchInp.value.toLowerCase();
	let filter = users.filter(
		user => user.firstName.toLowerCase().includes(text) || user.lastName.toLowerCase().includes(text),
	);

	draw(filter);
}

function draw(arr) {
	let res = '';
	for (let i = 0; i < arr.length; i++) {
		res += `<tr>
			<td>${i + 1}</td>
			<td>${arr[i].firstName}</td>
			<td>${arr[i].lastName}</td>
			<td>${arr[i].age}</td>
			<td>${arr[i].gender}</td>
			<td>${arr[i].userType}</td>
			<td>${arr[i].languages.join(', ')}</td>

			<td>
				<div style="background-color:${arr[i].color}; width:25px; height:25px"></div>
			</td>

			<td>${arr[i].description}</td>
			<td>
				<button onclick="deleteUser(${i})" class="btn btn-danger">🗑️</button>
				<button onclick="updateUser(${i})" class="btn btn-warning">✏️</button>
			</td>
		</tr>`;
	}
	tbody.innerHTML = res;
}

function formClear() {
	firstName.value = '';
	lastName.value = '';
	ageInp.value = '';
	genderInp.value = '';

	studentInp.checked = false;
	childInp.checked = false;

	englishInp.checked = false;
	uzbekInp.checked = false;
	russionInp.checked = false;

	colorInp.value = '';
	descriptionInp.value = '';
}
