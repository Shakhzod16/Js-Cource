const tbody = document.getElementById('tbody');
const pagenations = document.getElementById('pagenations');

let todos = [];
let curerrentPage = 1;

function getTodos() {
	axios({
		url: 'https://jsonplaceholder.typicode.com/todos?_page=1',
		method: 'GET',
	}).then(ress => {
		todos = ress.data;
		drawTodos();
		drawPagenations();
		drawPagenations();
	});
}
getTodos();

function goToPage(pageNumber) {
	curerrentPage = pageNumber;
	axios({
		url: 'https://jsonplaceholder.typicode.com/todos?_page=' + pageNumber,
		method: 'GET',
	}).then(ress => {
		todos = ress.data;
		drawTodos();
		drawPagenations();
	});
}

function handleSearch(event) {
	let inpValue = event.target.value;
	axios({
		url: `https://jsonplaceholder.typicode.com/todos?title_like=${inpValue}&_page=1`,
		method: 'GET',
	}).then(ress => {
		todos = ress.data;
		drawTodos();
	});
}

function drawTodos() {
	let result = '';
	for (let i = 0; i < todos.length; i++) {
		result += `
     <tr>
      <td>${todos[i].id}</td>
      <td>${todos[i].userId}</td>
      <td>${todos[i].title}</td>
      <td>${todos[i].completed}</td>
     </tr>
    `;
	}
	tbody.innerHTML = result;
}

function drawPagenations() {
	let res = '';
	for (let i = 1; i <= 20; i++) {
		res += `<button onclick="goToPage(${i})" class="btn ${
			curerrentPage === i ? 'btn-dark' : 'btn-outline-dark'
		}">${i}</button>`;
	}
	pagenations.innerHTML = res;
}
