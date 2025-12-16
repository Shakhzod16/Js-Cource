// let sardorIs = true;
// let vada = new Promise((resolve, reject) => {
// 	if (sardorIs) {
// 		resolve('Sardor kedi');
// 	} else {
// 		reject("yo'lda ushlanib qoldi");
// 	}
// });

// vada
// 	.then(resonse => {
// 		console.log(resonse);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})
// 	.finally(() => {});

// =====================================
// let users = [];
// const tbody = document.getElementById('tbody');
// axios({
// 	url: 'https://jsonplaceholder.typicode.com/users',
// 	method: 'get', // GET, POST, DELETE, PUT
// })
// 	.then(res => {
// 		users = res.data;
// 		draw();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// function draw() {
// 	let s = '';
// 	for (let i = 0; i < users.length; i++) {
// 		s += `
//     <tr>
//      <td>${users[i].id}</td>
//      <td>${users[i].name}</td>
//      <td>${users[i].username}</td>
//      <td>${users[i].email}</td>
//      <td>${users[i].phone}</td>
//      <td>${users[i].address.street}</td>
//     <tr/>
//     `;
// 	}
// 	tbody.innerHTML = s;
// }
// ==============================================================================================
// let comments = [];
// const tbody = document.getElementById('tbody');
// axios({
// 	url: 'https://jsonplaceholder.typicode.com/comments',
// 	method: 'get',
// })
// 	.then(res => {
// 		comments = res.data;
// 		draw();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// function draw() {
// 	let s = '';
// 	for (let i = 0; i < comments.length; i++) {
// 		s += `
//     <tr>
//      <td>${comments[i].postId}</td>
//      <td>${comments[i].id}</td>
//      <td>${comments[i].name}</td>
//      <td>${comments[i].email}</td>
//      <td>${comments[i].body}</td>

//     <tr/>
//     `;
// 	}
// 	tbody.innerHTML = s;
// }
// ================================================================================
// let posts = [];
// const tbody = document.getElementById('tbody');
// axios({
// 	url: 'https://jsonplaceholder.typicode.com/posts',
// 	method: 'get',
// })
// 	.then(res => {
// 		posts = res.data;
// 		draw();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// function draw() {
// 	let s = '';
// 	for (let i = 0; i < posts.length; i++) {
// 		s += `
//     <tr>
//      <td>${posts[i].userId}</td>
//      <td>${posts[i].id}</td>
//      <td>${posts[i].title}</td>
//      <td>${posts[i].body}</td>

//     </tr>
//     `;
// 	}
// 	tbody.innerHTML = s;
// }
// ===============================================
// let albums = [];
// const tbody = document.getElementById('tbody');
// axios({
// 	url: 'https://jsonplaceholder.typicode.com/albums',
// 	method: 'get',
// })
// 	.then(res => {
// 		albums = res.data;
// 		draw();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// function draw() {
// 	let s = '';
// 	for (let i = 0; i < albums.length; i++) {
// 		s += `
//     <tr>
//      <td>${albums[i].userId}</td>
//      <td>${albums[i].id}</td>
//      <td>${albums[i].title}</td>
//     </tr>
//     `;
// 	}
// 	tbody.innerHTML = s;
// }
// ============================================
let todos = [];
const tbody = document.getElementById('tbody');
axios({
	url: 'https://jsonplaceholder.typicode.com/todos',
	method: 'get',
})
	.then(res => {
		todos = res.data;
		draw();
	})
	.catch(err => {
		console.log(err);
	});

function draw() {
	let s = '';
	for (let i = 0; i < todos.length; i++) {
		s += `
    <tr>
     <td>${todos[i].userId}</td>
     <td>${todos[i].id}</td>
     <td>${todos[i].title}</td>
     <td>${todos[i].completed}</td>
    </tr>
    `;
	}
	tbody.innerHTML = s;
}
