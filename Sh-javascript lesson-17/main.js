const openFormBtn = document.getElementById('open_form_btn');
const myForm = document.getElementById('my_form');

const tbody = document.getElementById('tbody');

const firstNameInp = document.getElementById('firstname_inp');
const lastNameInp = document.getElementById('lastname_inp');

const saveBtn = document.getElementById('save_btn');

const userSelect = document.getElementById('user_select');

const amountInp = document.getElementById('amount_inp');
const valueInp = document.getElementById('value_inp');
const fillBalanceBtn = document.getElementById('fill_balance_btn');

const from_select = document.getElementById('from_select');
const to_select = document.getElementById('to_select');

const moveBtn = document.getElementById('move_btn');

openFormBtn.addEventListener('click', openForm);
saveBtn.addEventListener('click', saveUser);
fillBalanceBtn.addEventListener('click', fillBalance);
moveBtn.addEventListener('click', move);

function openForm() {
	myForm.classList.toggle('d-none');
}

let users = [];
if (localStorage.getItem('users')) {
	users = JSON.parse(localStorage.getItem('users'));
} else {
	users = [];
}

soqchi = '';

function saveUser() {
	let userObj = {
		firstname: firstNameInp.value,
		lastname: lastNameInp.value,
		balance: 0,
	};
	if (soqchi === '') {
		users.push(userObj);
	} else {
		soqchi = '';
	}
	drawUserToSelect();
	saveToLocal();
	drawUsers();
}
drawUsers();

function drawUsers() {
	let s = ``;
	for (let i = 0; i < users.length; i++) {
		s += `<tr>
    <td>${i + 1}</td>
    <td>${users[i].firstname}</td>
    <td>${users[i].lastname}</td>
    <td>${users[i].balance} UZB</td>
    <td>
    <button onclick="deleteUser(${i})" class="btn btn-danger">🗑️</button>
    <button onclick="updateUser(${i})" class="btn btn-warning">✏️</button>
    </td>
    </tr>`;
	}
	tbody.innerHTML = s;
}

function saveToLocal() {
	localStorage.setItem('users', JSON.stringify(users));
}

function deleteUser(index) {
	users.splice(index, 1);
	drawUsers();
	saveToLocal();
}

function drawUserToSelect() {
	let s = '<option value="" disabled selected>Select User</option>';
	for (let i = 0; i < users.length; i++) {
		s += `<option value="${i}">${users[i].firstname} ${users[i].lastname}</option>`;
	}
	userSelect.innerHTML = s;
	from_select.innerHTML = s;
	to_select.innerHTML = s;
}
drawUserToSelect();

function fillBalance() {
	let userIndex = +userSelect.value;
	let currentUser = users[userIndex];
	currentUser.balance += +amountInp.value;
	saveToLocal();
	drawUsers();
}

function move() {
	let fromUsr = users[+from_select.value];
	let toUser = users[+to_select.value];
	let currentAmount = +valueInp.value;

	if (isNaN(+from_select.value) || isNaN(+to_select.value)) {
		alert('Iltimos, foydalanuvchi tanlang');
		return;
	}

	if (+from_select.value === +to_select.value) {
		alert("o'zingizdan pul o'tkazib bo'lmaydi");
		return;
	}

	if (fromUsr.balance >= currentAmount) {
		fromUsr.balance -= currentAmount;
		toUser.balance += currentAmount;

		saveToLocal();
		drawUsers();
	} else {
		alert('balance yetarli emas');
	}
}
