const tbody = document.getElementById('tbody');
const pagenations = document.getElementById('pagenations');

let todos = [];
let curerrentPage = 1;
let searchlength = 0;
let searchValue = '';
let currentPageSize = 10;

function getTodos() {
	axios({
		url: `https://jsonplaceholder.typicode.com/todos?_page=${curerrentPage}&_limit=${currentPageSize}&title_like=${searchValue}`,
		method: 'GET',
	}).then(ress => {
		todos = ress.data;
		drawTodos();
		drawPagenations();
	});
}
getTodos();

function goToPage(pageNumber) {
	curerrentPage = pageNumber;
	axios({
		url: `https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_limit=${currentPageSize}&title_like=${searchValue}`,
		method: 'GET',
	}).then(ress => {
		window.scrollTo({ top: 0 });
		todos = ress.data;
		drawTodos();
		drawPagenations();
	});
}

function handleSearch(event) {
	let inpValue = event.target.value;
	searchValue = event.target.value;
	curerrentPage = 1;

	axios({
		url: `https://jsonplaceholder.typicode.com/todos?title_like=${inpValue}`,
		method: 'GET',
	}).then(res => {
		searchlength = res.data.length;
		drawPagenations();

		axios({
			url: `https://jsonplaceholder.typicode.com/todos?title_like=${inpValue}&_page=1&_limit=${currentPageSize}`,
			method: 'GET',
		}).then(ress => {
			todos = ress.data;
			drawTodos();
		});
	});
}
function drawTodos() {
	let result = '';
	for (let i = 0; i < todos.length; i++) {
		result += `
     <tr>
      <td>${todos[i].id}</td>
      <td>${todos[i].userId}</td>
      <td>${
				searchValue
					? todos[i].title.replaceAll(searchValue, `<mark class="bg-warning">${searchValue}</mark>`)
					: todos[i].title
			}</td>
      <td>${todos[i].completed}</td>
     </tr>`;
	}
	tbody.innerHTML = result;
}

function handlePagesize(event) {
	let pageSize = parseInt(event.target.value);
	currentPageSize = pageSize;
	axios({
		url: `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=${pageSize}&title_like=${searchValue}`,
		method: 'GET',
	}).then(ress => {
		todos = ress.data;
		curerrentPage = 1;
		drawTodos();
		drawPagenations();
	});
}

function drawPagenations() {
	let res = '';
	let pages = searchValue ? Math.ceil(searchlength / currentPageSize) : Math.ceil(200 / currentPageSize);

	for (let i = 1; i <= pages; i++) {
		res += `<button onclick="goToPage(${i})" class="btn ${
			curerrentPage === i ? 'btn-dark' : 'btn-outline-dark'
		}">${i}</button>`;
	}

	pagenations.innerHTML = res;
}
