const tbody = document.getElementById('tbody');
const todoTbody = document.getElementById('todo_tbody');

let users = [];
let userTodos = [];

function getUsers() {
	axios({
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'get',
	})
		.then(ress => {
			users = ress.data;
			drawUsers();
		})
		.catch(err => {
			console.log(err);
		});
}
getUsers();

function drawUsers() {
	let s = '';
	for (let i = 0; i < users.length; i++) {
		s += `<tr>
     <td>${users[i].id}</td>
     <td>${users[i].name}</td>
     <td>${users[i].username}</td>
     <td>${users[i].email}</td>
     <td>
      <button onclick="getUserTodos(${users[i].id})" class='btn btn-success'>todos</button>
      <button></button>
      <button></button>
      </td>
    </tr>`;
	}
	tbody.innerHTML = s;
}

function getUserTodos(userId) {
	openModal();
	axios({
		url: 'https://jsonplaceholder.typicode.com/todos?userId=' + userId,
		method: 'get',
	})
		.then(ress => {
			userTodos = ress.data;
			drawUsersTodos();
		})
		.catch(err => {
			console.log(err);
		});
}

function drawUsersTodos() {
	let s = '';
	for (let i = 0; i < userTodos.length; i++) {
		s += `
     <tr>
      <td>(${userTodos[i].userId})</td>
      <td>(${userTodos[i].id})</td>
      <td>(${userTodos[i].title})</td>
      <td>(${userTodos[i].completed})</td>
     </tr>
    `;
	}
	todoTbody.innerHTML = s;
}

// Modal
function openModal() {
	const myModal = document.getElementById('todo_modal');
	const modal = new bootstrap.Modal(myModal);
	modal.show();
}

function closeModal() {
	const myModal = document.getElementById('todo_modal');
	const modal = bootstrap.Modal.getInstance(myModal);
	modal.hide();
}
