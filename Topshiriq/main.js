const openModalBtn = document.getElementById('open_modal_btn');
const saveBtn = document.getElementById('save_btn');

const form = document.getElementById('product_form');
const tbody = document.getElementById('tbody');

const Image_form = document.getElementById('Image_form');
const viewContainer = document.getElementById('view_container');

let imageFileInp = document.getElementById('image_file_inp');
let imgURL = '';
let editIndex = '';

openModalBtn.addEventListener('click', openModal);
saveBtn.addEventListener('click', save);
if (imageFileInp) imageFileInp.addEventListener('change', handleFile);

function openModal() {
	const myModal = document.getElementById('user_modal');
	const modal = new bootstrap.Modal(myModal);
	modal.show();
	drawImageForm();
}

function closeModal() {
	const myModal = document.getElementById('user_modal');
	const modal = bootstrap.Modal.getInstance(myModal);
	modal.hide();
}

let nameInp = document.getElementById('name_inp');
let ageInp = document.getElementById('age_inp');
let cityInp = document.getElementById('city_inp');
let emailInp = document.getElementById('email_inp');
let phoneInp = document.getElementById('phone_inp');
let positionInp = document.getElementById('position_inp');

let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

function save() {
	let userObj = {
		name: nameInp.value,
		age: ageInp.value,
		city: cityInp.value,
		email: emailInp.value,
		phone: phoneInp.value,
		position: positionInp.value,
		picture: imgURL,
	};

	if (editIndex === '') {
		users.push(userObj);
	} else {
		users[editIndex] = userObj;
		editIndex = '';
	}

	drawUsers();
	saveByLocal();
	closeModal();
	clearForm();

	imgURL = '';
	form.reset();
}

function drawUsers() {
	let s = ``;
	for (let i = 0; i < users.length; i++) {
		s += `
        <tr>
            <td>${i + 1}</td>
            <td><img src="${users[i].picture}" width="60"></td>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
            <td>${users[i].city}</td>
            <td>${users[i].email}</td>
            <td>${users[i].phone}</td>
            <td>${users[i].position}</td>

            <td>
                <button onclick="deleteUser(${i})" class="btn btn-danger">🗑️</button>
                <button onclick="editUser(${i})" class="btn btn-primary">✏️</button>
                <button onclick="viewUser(${i})" class="btn btn-success">👁️</button>
            </td>
        </tr>`;
	}
	tbody.innerHTML = s;
}

function saveByLocal() {
	localStorage.setItem('users', JSON.stringify(users));
}

function deleteUser(index) {
	users.splice(index, 1);
	drawUsers();
	saveByLocal();
}

function editUser(index) {
	openModal();
	editIndex = index;
	nameInp.value = users[index].name;
	ageInp.value = users[index].age;
	cityInp.value = users[index].city;
	emailInp.value = users[index].email;
	phoneInp.value = users[index].phone;
	positionInp.value = users[index].position;
	imgURL = users[index].picture;
}

function handleFile(e) {
	let file = e.target.files[0];
	let reader = new FileReader();

	reader.onload = function (x) {
		imgURL = x.target.result;
	};

	reader.readAsDataURL(file);
}

function clearForm() {
	nameInp.value = '';
	ageInp.value = '';
	cityInp.value = '';
	emailInp.value = '';
	phoneInp.value = '';
	positionInp.value = '';
}

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
                <img width="100px" src="${imgURL}" alt="" style="object-fit: cover; border: 1px solid #ccc;"/>
                <button type="button" onclick="removeImage()" class="btn btn-danger btn-sm">X</button>
            </div>`;
	}
}

function removeImage() {
	imgURL = '';
	drawImageForm();
}
function handleFile(e) {
	let file = e.target.files[0];
	if (!file) return;

	let reader = new FileReader();
	reader.onload = function (x) {
		imgURL = x.target.result;
		drawImageForm();
	};
	reader.readAsDataURL(file);
}

drawUsers();
