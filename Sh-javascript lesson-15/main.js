// const saveBtn = document.getElementById('save_btn');

// const usernameInp = document.getElementById('username_inp');
// const descriptionInp = document.getElementById('description_inp');
// const statusInp = document.getElementById('status_inp');

// const openCards = document.getElementById('open_cards');
// const progressCards = document.getElementById('progress_cards');
// const completedCards = document.getElementById('completed_cards');

// saveBtn.addEventListener('click', save);
// let order = [];
// let soqchi = '';

// function save() {
// 	let orderObj = {
// 		username: usernameInp.value,
// 		description: descriptionInp.value,
// 		status: statusInp.value,
// 	};

// 	if (soqchi === '') {
// 		order.push(orderObj);
// 	} else {
// 		order[soqchi] = orderObj;
// 		soqchi = '';
// 	}

// 	draw();
// 	clearForm();
// }

// function draw() {
// 	let s1 = '';
// 	let s2 = '';
// 	let s3 = '';

// 	for (let i = 0; i < order.length; i++) {
// 		const cardHTML = `
// 			<div class="border rounded-4 px-3 py-2 position-relative mb-2 bg-white">
// 				<button onclick="deleteOrder(${i})" class="btn btn-close position-absolute top-0 end-0"></button>

// 				<h5 class="fs-4">${order[i].username}</h5>
// 				<p class="text-muted">${order[i].description}</p>

// 				<div class="d-flex gap-2 mt-2">
// 					<button onclick="editOrder(${i})" class="btn btn-warning btn-sm">Edit</button>
// 					<button onclick = 'changeSatatus(${i})' class="btn btn-primary btn-sm"> => </button>
// 				</div>
// 			</div>
// 		`;

// 		if (order[i].status === 'OPEN') s1 += cardHTML;
// 		else if (order[i].status === 'PROGRESS') s2 += cardHTML;
// 		else if (order[i].status === 'COMPLETED') s3 += cardHTML;
// 	}

// 	openCards.innerHTML = s1;
// 	progressCards.innerHTML = s2;
// 	completedCards.innerHTML = s3;
// }

// function deleteOrder(index) {
// 	order.splice(index, 1);
// 	draw();
// }

// function editOrder(index) {
// 	let currentOrder = order[index];
// 	usernameInp.value = currentOrder.username;
// 	descriptionInp.value = currentOrder.description;
// 	statusInp.value = currentOrder.status;
// 	soqchi = index;
// }
// function changeSatatus(index) {
// 	let currentOrder = order[index];

// 	if (currentOrder.status === 'OPEN') {
// 		currentOrder.status = 'PROGRESS';
// 	} else if (currentOrder.status === 'PROGRESS') {
// 		currentOrder.status = 'COMPLETED';
// 	} else if (currentOrder.status === 'COMPLETED') {
// 		currentOrder.status = 'OPEN';
// 	}

// 	draw();
// }

// function clearForm() {
// 	usernameInp.value = '';
// 	descriptionInp.value = '';
// 	statusInp.value = 'OPEN';
// }

// Homework

// const showBtn = document.getElementById('showBtn');
// const productForm = document.getElementById('productForm');

// const saveBtn = document.getElementById('saveBtn');
// const cancelBtn = document.getElementById('cancelBtn');
// const cartBtn = document.getElementById('cartBtn');

// const titleInp = document.getElementById('title');
// const descInp = document.getElementById('description');

// const productsDiv = document.getElementById('products');
// const cartDiv = document.getElementById('cart');

// let products = [];
// let cartItems = [];
// let editIndex = null;

// showBtn.onclick = function () {
// 	productForm.style.display = 'block';
// };

// cancelBtn.onclick = function () {
// 	clearTempAddedItems();
// 	drawProducts();
// 	drawCart();
// 	clearForm();
// 	productForm.style.display = 'none';
// 	editIndex = null;
// };

// let temp = [];

// function clearTempAddedItems() {
// 	for (let i = 0; i < temp.length; i++) {
// 		if (temp[i].type === 'product') {
// 			products.splice(temp[i].index, 1);
// 		} else {
// 			cartItems.splice(temp[i].index, 1);
// 		}
// 	}
// 	temp = [];
// }

// saveBtn.onclick = function () {
// 	let title = titleInp.value;
// 	let desc = descInp.value;

// 	if (title === '') {
// 		alert('Title kerak!');
// 		return;
// 	}

// 	let obj = { title: title, description: desc };

// 	if (editIndex === null) {
// 		products.push(obj);
// 		temp.push({ type: 'product', index: products.length - 1 });
// 	} else {
// 		products[editIndex] = obj;
// 		editIndex = null;
// 	}

// 	drawProducts();
// 	clearForm();
// };

// cartBtn.onclick = function () {
// 	let title = titleInp.value;
// 	let desc = descInp.value;

// 	if (title === '') {
// 		alert('Title kerak!');
// 		return;
// 	}

// 	let obj = { title: title, description: desc };

// 	cartItems.push(obj);
// 	temp.push({ type: 'cart', index: cartItems.length - 1 });

// 	drawCart();
// 	clearForm();
// };

// function drawProducts() {
// 	productsDiv.innerHTML = '';

// 	for (let i = 0; i < products.length; i++) {
// 		let card = document.createElement('div');
// 		card.className = 'product';

// 		card.innerHTML =
// 			'<h5>' +
// 			products[i].title +
// 			'</h5>' +
// 			'<p>' +
// 			products[i].description +
// 			'</p>' +
// 			'<div class="btn-group">' +
// 			'<button class="btn btn-warning btn-sm editBtn">Edit</button>' +
// 			'<button class="btn btn-danger btn-sm deleteBtn">Delete</button>' +
// 			'</div>';

// 		card.getElementsByClassName('deleteBtn')[0].onclick = function () {
// 			products.splice(i, 1);
// 			drawProducts();
// 		};

// 		card.getElementsByClassName('editBtn')[0].onclick = function () {
// 			editIndex = i;
// 			titleInp.value = products[i].title;
// 			descInp.value = products[i].description;
// 			productForm.style.display = 'block';
// 		};

// 		productsDiv.appendChild(card);
// 	}
// }

// function drawCart() {
// 	cartDiv.innerHTML = '';

// 	for (let i = 0; i < cartItems.length; i++) {
// 		let card = document.createElement('div');
// 		card.className = 'cart-item';

// 		card.innerHTML = '<h5>' + cartItems[i].title + '</h5>' + '<p>' + cartItems[i].description + '</p>';

// 		cartDiv.appendChild(card);
// 	}
// }

// function clearForm() {
// 	titleInp.value = '';
// 	descInp.value = '';
// }

// <!-- ================================ Leson ============================== -->

// const titleInp = document.getElementById('title_inp');
// const result = document.getElementById('result');

// titleInp.addEventListener('input', handleChange);

// function handleChange(e) {
// 	result.innerText = `Siz ${e.target.value} yashaysiz`;
// }

// =============================

// const title = document.getElementById('title');

// function test(e) {
// 	let res = +e.target.value;
// 	draw(res);
// }
// function draw(son) {
// 	let s = '';
// 	for (let i = 1; i <= son; i++) {
// 		s += `<p>${i}</p>`;
// 	}
// 	title.innerHTML = s;
// }

// ====================

// const title = document.getElementById('title');

// function test(e) {
// 	let res = +e.target.value;
// 	draw(res);
// }

// function draw(son) {
// 	let s = '';
// 	for (let i = 1; i <= son; i++) {
// 		s += `<div class="doira">${i}</div>`;
// 	}
// 	title.innerHTML = s;
// }

// ===========================

const title = document.getElementById('title');

function test(e) {
	let input = +e.target.value;
	draw(input);
}

function draw(son) {
	let s = '';
	for (let i = 1; i <= son; i++) {
		s += `<div class="doira ${i % 2 == 0 ? 'bg-success' : 'bg-danger'}">${i}</div>`;
	}
	title.innerHTML = s;
}
