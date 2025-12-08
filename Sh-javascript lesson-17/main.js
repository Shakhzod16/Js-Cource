// const openFormBtn = document.getElementById('open_form_btn');
// const myForm = document.getElementById('my_form');

// const tbody = document.getElementById('tbody');

// const firstNameInp = document.getElementById('firstname_inp');
// const lastNameInp = document.getElementById('lastname_inp');

// const saveBtn = document.getElementById('save_btn');

// const userSelect = document.getElementById('user_select');

// const amountInp = document.getElementById('amount_inp');
// const valueInp = document.getElementById('value_inp');
// const fillBalanceBtn = document.getElementById('fill_balance_btn');

// const from_select = document.getElementById('from_select');
// const to_select = document.getElementById('to_select');

// const moveBtn = document.getElementById('move_btn');

// openFormBtn.addEventListener('click', openForm);
// saveBtn.addEventListener('click', saveUser);
// fillBalanceBtn.addEventListener('click', fillBalance);
// moveBtn.addEventListener('click', move);

// function openForm() {
// 	myForm.classList.toggle('d-none');
// }

// let users = [];
// if (localStorage.getItem('users')) {
// 	users = JSON.parse(localStorage.getItem('users'));
// } else {
// 	users = [];
// }

// soqchi = '';

// function saveUser() {
// 	let userObj = {
// 		firstname: firstNameInp.value,
// 		lastname: lastNameInp.value,
// 		balance: 0,
// 	};
// 	if (soqchi === '') {
// 		users.push(userObj);
// 	} else {
// 		soqchi = '';
// 	}
// 	drawUserToSelect();
// 	saveToLocal();
// 	drawUsers();
// }
// drawUsers();

// function drawUsers() {
// 	let s = ``;
// 	for (let i = 0; i < users.length; i++) {
// 		s += `<tr>
//     <td>${i + 1}</td>
//     <td>${users[i].firstname}</td>
//     <td>${users[i].lastname}</td>
//     <td>${users[i].balance} UZB</td>
//     <td>
//     <button onclick="deleteUser(${i})" class="btn btn-danger">🗑️</button>
//     <button onclick="updateUser(${i})" class="btn btn-warning">✏️</button>
//     </td>
//     </tr>`;
// 	}
// 	tbody.innerHTML = s;
// }

// function saveToLocal() {
// 	localStorage.setItem('users', JSON.stringify(users));
// }

// function deleteUser(index) {
// 	users.splice(index, 1);
// 	drawUsers();
// 	saveToLocal();
// }

// function drawUserToSelect() {
// 	let s = '<option value="" disabled selected>Select User</option>';
// 	for (let i = 0; i < users.length; i++) {
// 		s += `<option value="${i}">${users[i].firstname} ${users[i].lastname}</option>`;
// 	}
// 	userSelect.innerHTML = s;
// 	from_select.innerHTML = s;
// 	to_select.innerHTML = s;
// }
// drawUserToSelect();

// function fillBalance() {
// 	let userIndex = +userSelect.value;
// 	let currentUser = users[userIndex];
// 	currentUser.balance += +amountInp.value;
// 	saveToLocal();
// 	drawUsers();
// }

// function move() {
// 	let fromUsr = users[+from_select.value];
// 	let toUser = users[+to_select.value];
// 	let currentAmount = +valueInp.value;

// 	if (isNaN(+from_select.value) || isNaN(+to_select.value)) {
// 		alert('Iltimos, foydalanuvchi tanlang');
// 		return;
// 	}

// 	if (+from_select.value === +to_select.value) {
// 		alert("o'zingizdan pul o'tkazib bo'lmaydi");
// 		return;
// 	}

// 	if (fromUsr.balance >= currentAmount) {
// 		fromUsr.balance -= currentAmount;
// 		toUser.balance += currentAmount;

// 		saveToLocal();
// 		drawUsers();
// 	} else {
// 		alert('balance yetarli emas');
// 	}
// }

// Homework
const openModalBtn = document.getElementById('open_modal_btn');
const saveBtn = document.getElementById('save_btn');

const form = document.getElementById('product_form');

const myContainer = document.getElementById('my_container');

const Image_form = document.getElementById('Image_form');
let imageFileInp = document.getElementById('image_file_inp');

let imgURL = '';

openModalBtn.addEventListener('click', openModal);
saveBtn.addEventListener('click', save);
if (imageFileInp) imageFileInp.addEventListener('change', handleFile);

function openModal() {
	const myModal = document.getElementById('product_modal');
	const modal = new bootstrap.Modal(myModal);
	modal.show();
}

function closeModal() {
	const myModal = document.getElementById('product_modal');
	const modal = bootstrap.Modal.getInstance(myModal);
	modal.hide();
}

let imageInp = form[0];
let titleInp = form[1];
let descriptionInp = form[2];
let priceInp = form[3];

let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

function save() {
	let productObj = {
		imageInp: imgURL || imageInp.value,
		title: titleInp.value,
		description: descriptionInp.value,
		price: priceInp.value,
	};

	products.push(productObj);
	draw();
	saveByLocal();
	closeModal();

	imgURL = '';
	drawImageForm();
	form.reset();
}

function draw() {
	let res = '';
	for (let i = 0; i < products.length; i++) {
		res += `
        <div class="card position-relative" style="width: 18rem">
            <img class="card-img-top" src="${products[i].imageInp}" alt="Card image cap" />
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-text">${products[i].title}</h5>
                    <p class="mt-1 text-primary">${products[i].price}</p>
                </div>

                <p class="card-text">${products[i].description}</p>
                <div class="d-flex gap-2">

                    <button onclick="deleteProduct(${i})" class="btn btn-close position-absolute top-0 end-0"></button>
                    <button class="btn btn-primary w-100">+card</button>
                    <button class="w-100 btn btn-warning">edit</button>
                </div>
            </div>
        </div>
        `;
	}
	myContainer.innerHTML = res;
}

function saveByLocal() {
	localStorage.setItem('products', JSON.stringify(products));
}

function deleteProduct(index) {
	products.splice(index, 1);
	draw();
	saveByLocal();
}

function handleFile(e) {
	let file = e.target.files[0];
	if (!file) return;
	let fileReader = new FileReader();

	fileReader.onload = function (ev) {
		imgURL = ev.target.result;
		drawImageForm();
	};

	fileReader.readAsDataURL(file);
}

draw();

function drawImageForm() {
	if (imgURL === '') {
		Image_form.innerHTML = `
            <label class="upload-form w-100 btn btn-outline-dark text-center">
                Yuklash uchun bosing
                <input id="image_file_inp" type="file" hidden />
            </label>
        `;

		imageFileInp = document.getElementById('image_file_inp');
		if (imageFileInp) imageFileInp.addEventListener('change', handleFile);
	} else {
		Image_form.innerHTML = `
            <div class='d-flex gap-3 align-items-center'>
                <img width="100px" src="${imgURL}" alt="" />
                <button onclick="removeImage()" class="btn btn-danger btn-sm">X</button>
            </div>`;
	}
}

function removeImage() {
	imgURL = '';

	imageFileInp = document.getElementById('image_file_inp');
	if (imageFileInp) imageFileInp.value = '';
	drawImageForm();
}
