const saveBtn = document.getElementById('save_btn');
const card = document.getElementById('card');

const nameInp = document.getElementById('name_inp');
const authorInp = document.getElementById('author_inp');
const priceInp = document.getElementById('price_inp');

const search_name = document.getElementById('search_name');
const search_author = document.getElementById('search_author');

const price_from = document.getElementById('price_from');
const price_to = document.getElementById('price_to');

const searchFromToBtn = document.getElementById('searchFromTo');

saveBtn.addEventListener('click', save);
searchFromToBtn.addEventListener('click', searchToFrom);

search_name.addEventListener('input', searchName);
search_author.addEventListener('input', searchAuthor);

let soqchi = '';
let users = [];

if (localStorage.getItem('users')) {
	users = JSON.parse(localStorage.getItem('users'));
}

function save() {
	let userObj = {
		name: nameInp.value,
		author: authorInp.value,
		price: priceInp.value,
	};

	if (soqchi === '') {
		users.push(userObj);
	} else {
		users[soqchi] = userObj;
		soqchi = '';
	}

	saveByLocal();
	clearForm();
	draw(users);
}

function deleteUser(index) {
	users.splice(index, 1);
	saveByLocal();
	draw(users);
}

function editUser(index) {
	soqchi = index;
	let a = users[index];
	nameInp.value = a.name;
	authorInp.value = a.author;
	priceInp.value = a.price;
}

function draw(users) {
	let res = '';
	for (let i = 0; i < users.length; i++) {
		res += `
			<div class="border p-3 m-2 rounded shadow-sm" style="width:250px;">
				<h5>${users[i].name}</h5>
				<p>Author: ${users[i].author}</p>
				<p>Price: ${users[i].price}</p>
				<button class="btn btn-danger btn-sm" onclick="deleteUser(${i})">🗑️</button>
				<button class="btn btn-warning btn-sm ms-2" onclick="editUser(${i})">✏️</button>
			</div>
		`;
	}
	card.innerHTML = res;
}

function searchName() {
	let search = search_name.value.toUpperCase();
	let filter = users.filter(item => item.name.toUpperCase().includes(search));
	draw(filter);
}

function searchAuthor() {
	let search = search_author.value.toUpperCase();
	let filter = users.filter(item => item.author.toUpperCase().includes(search));
	draw(filter);
}

function clearForm() {
	nameInp.value = '';
	priceInp.value = '';
	authorInp.value = '';
}

function saveByLocal() {
	localStorage.setItem('users', JSON.stringify(users));
}

function searchToFrom() {
	const from = +price_from.value;
	const to = +price_to.value;

	const filter = users.filter(item => item.price >= from && item.price <= to);

	draw(filter);
}

draw(users);
