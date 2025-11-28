const saveBtn = document.getElementById('save_btn');

const usernameInp = document.getElementById('username_inp');
const descriptionInp = document.getElementById('description_inp');
const statusInp = document.getElementById('status_inp');

const openCards = document.getElementById('open_cards');
const progressCards = document.getElementById('progress_cards');
const completedCards = document.getElementById('completed_cards');

saveBtn.addEventListener('click', save);
let order = [];
let soqchi = '';

function save() {
	let orderObj = {
		username: usernameInp.value,
		description: descriptionInp.value,
		status: statusInp.value,
	};

	if (soqchi === '') {
		order.push(orderObj);
	} else {
		order[soqchi] = orderObj;
		soqchi = '';
	}

	draw();
	clearForm();
}

function draw() {
	let s1 = '';
	let s2 = '';
	let s3 = '';

	for (let i = 0; i < order.length; i++) {
		const cardHTML = `
			<div class="border rounded-4 px-3 py-2 position-relative mb-2 bg-white">
				<button onclick="deleteOrder(${i})" class="btn btn-close position-absolute top-0 end-0"></button>

				<h5 class="fs-4">${order[i].username}</h5>
				<p class="text-muted">${order[i].description}</p>

				<div class="d-flex gap-2 mt-2">
					<button onclick="editOrder(${i})" class="btn btn-warning btn-sm">Edit</button>
					<button onclick = 'changeSatatus(${i})' class="btn btn-primary btn-sm"> => </button>
				</div>
			</div>
		`;

		if (order[i].status === 'OPEN') s1 += cardHTML;
		else if (order[i].status === 'PROGRESS') s2 += cardHTML;
		else if (order[i].status === 'COMPLETED') s3 += cardHTML;
	}

	openCards.innerHTML = s1;
	progressCards.innerHTML = s2;
	completedCards.innerHTML = s3;
}

function deleteOrder(index) {
	order.splice(index, 1);
	draw();
}

function editOrder(index) {
	let currentOrder = order[index];
	usernameInp.value = currentOrder.username;
	descriptionInp.value = currentOrder.description;
	statusInp.value = currentOrder.status;
	soqchi = index;
}
function changeSatatus(index) {
	let currentOrder = order[index];

	if (currentOrder.status === 'OPEN') {
		currentOrder.status = 'PROGRESS';
	} else if (currentOrder.status === 'PROGRESS') {
		currentOrder.status = 'COMPLETED';
	} else if (currentOrder.status === 'COMPLETED') {
		currentOrder.status = 'OPEN';
	}

	draw();
}

function clearForm() {
	usernameInp.value = '';
	descriptionInp.value = '';
	statusInp.value = 'OPEN';
}
