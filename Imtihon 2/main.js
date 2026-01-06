const category = document.getElementById('category');
const productBody = document.getElementById('productBody');
const modalTitle = document.getElementById('modalTitle');

const pName = document.getElementById('pName');
const pPrice = document.getElementById('pPrice');

let categorys = [];
let products = [];
let currentCategoryId = null;

function getCategory() {
	axios({
		url: 'https://api.escuelajs.co/api/v1/categories',
		method: 'GET',
	})
		.then(res => {
			categorys = res.data;
			drawCategorys();
		})
		.catch(err => console.log(err));
}

getCategory();

function drawCategorys() {
	let result = '';

	for (let i = 0; i < categorys.length; i++) {
		result += `
      <div class="category-card"
        onclick="openCategory(${categorys[i].id}, '${categorys[i].name}')">
        ${categorys[i].name}
      </div>
    `;
	}

	category.innerHTML = result;
}

function openCategory(id, name) {
	currentCategoryId = id;
	modalTitle.innerText = name;

	const modal = new bootstrap.Modal(document.getElementById('productModal'));
	modal.show();

	getProducts();
}

function getProducts() {
	axios({
		url: `https://api.escuelajs.co/api/v1/categories/${currentCategoryId}/products`,
		method: 'GET',
	})
		.then(res => {
			products = res.data;
			drawProducts();
		})
		.catch(err => console.log(err));
}

function drawProducts() {
	let result = '';

	for (let i = 0; i < products.length; i++) {
		result += `
      <tr>
        <td>${i + 1}</td>
        <td>
          <img src="${products[i].images[0]}">
        </td>
        <td>${products[i].title}</td>
        <td>${products[i].category.name}</td>
        <td>${products[i].price} UZS</td>
      </tr>
    `;
	}

	productBody.innerHTML = result;
}
