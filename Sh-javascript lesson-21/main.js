const tbody = document.getElementById('tbody');
const todoTbody = document.getElementById('todo_tbody');
const postTbody = document.getElementById('post_tbody');
const albumTbody = document.getElementById('album_tbody');

let users = [];
let userTodos = [];
let userPosts = [];
let userAlbums = [];

// ================= USERS =================
function getUsers() {
	axios({
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'get',
	})
		.then(res => {
			users = res.data;
			drawUsers();
		})
		.catch(err => console.log(err));
}
getUsers();

function drawUsers() {
	let s = '';

	for (let i = 0; i < users.length; i++) {
		s += `
		<tr>
			<td>${users[i].id}</td>
			<td>${users[i].name}</td>
			<td>${users[i].username}</td>
			<td>${users[i].email}</td>
			<td>
				<button class="btn btn-success btn-sm"
					onclick="getUserTodos(${users[i].id})">Todos</button>

				<button class="btn btn-warning btn-sm"
					onclick="getUserPosts(${users[i].id})">Posts</button>

				<button class="btn btn-danger btn-sm"
					onclick="getUserAlbums(${users[i].id})">Albums</button>
			</td>
		</tr>`;
	}

	tbody.innerHTML = s;
}

// ================= TODOS =================
function getUserTodos(userId) {
	openModal('todo_modal');

	axios({
		url: 'https://jsonplaceholder.typicode.com/todos?userId=' + userId,
		method: 'get',
	})
		.then(res => {
			userTodos = res.data;
			drawUsersTodos();
		})
		.catch(err => console.log(err));
}

function drawUsersTodos() {
	let s = '';

	for (let i = 0; i < userTodos.length; i++) {
		s += `
		<tr>
			<td>${userTodos[i].userId}</td>
			<td>${userTodos[i].id}</td>
			<td>${userTodos[i].title}</td>
			<td>${userTodos[i].completed}</td>
		</tr>`;
	}

	todoTbody.innerHTML = s;
}

// ================= POSTS =================
function getUserPosts(userId) {
	openModal('post_modal');

	axios({
		url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
		method: 'get',
	})
		.then(res => {
			userPosts = res.data;
			drawUsersPosts();
		})
		.catch(err => console.log(err));
}

function drawUsersPosts() {
	let s = '';

	for (let i = 0; i < userPosts.length; i++) {
		s += `
		<tr>
			<td>${userPosts[i].userId}</td>
			<td>${userPosts[i].id}</td>
			<td>${userPosts[i].title}</td>
			<td>—</td>
		</tr>`;
	}

	postTbody.innerHTML = s;
}

// ================= ALBUMS =================

function getUserAlbums(userId) {
	openModal('album_modal');

	axios({
		url: 'https://jsonplaceholder.typicode.com/albums?userId=' + userId,
		method: 'get',
	})
		.then(res => {
			userAlbums = res.data;
			drawUsersAlbums();
		})
		.catch(err => {
			console.log(err);
		});
}

function drawUsersAlbums() {
	let s = '';

	for (let i = 0; i < userAlbums.length; i++) {
		s += `
		<tr>
			<td>${userAlbums[i].userId}</td>
			<td>${userAlbums[i].id}</td>
			<td>${userAlbums[i].title}</td>
			<td>—</td>
		</tr>`;
	}

	albumTbody.innerHTML = s;
}

// ================= MODAL =================
function openModal(modalId) {
	const modalEl = document.getElementById(modalId);
	const modal = new bootstrap.Modal(modalEl);
	modal.show();
}
