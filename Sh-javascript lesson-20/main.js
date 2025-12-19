const openModalBtn = document.getElementById('open_modal_btn');
const productsArea = document.getElementById('products_area');
const form = document.getElementById('form');

const saveBtn = document.getElementById('save_btn');

openModalBtn.addEventListener('click', openModal);
saveBtn.addEventListener('click', handleSave);

let products = [];
let categorys = [];

let titleInp = form[0];
let descriptionInp = form[1];
let priceInp = form[2];
let categoryInp = form[4];
let imageInp = form[5];

function getProducts() {
	axios({
		url: 'https://api.escuelajs.co/api/v1/products',
		method: 'get',
	})
		.then(res => {
			products = res.data;
			draw();
		})
		.catch(err => {
			console.log(err);
		});
}
getProducts();

function draw() {
	let s = '';
	for (let i = 0; i < products.length; i++) {
		s += `
  <div class="card" style="width: 18rem;">
    <img src="${products[i].images[0]}" class="card-img-top" alt="...">
      <div class="card-body">
			<div class="d-flex align-items-center justify-content-between">
       <h5 class="card-title text-truncate">${products[i].title}</h5>
			 <p class="text-primary text-truncate card-title">${products[i].price}</p>
			</div>

      <p class="card-text">${products[i].description}</p>
      <button  class="btn btn-primary">Add card</button>
    </div>
  </div>
		`;
	}
	productsArea.innerHTML = s;
}

function handleSave() {
	let productObj = {
		title: titleInp.value,
		price: +priceInp.value,
		description: descriptionInp.value,
		categoryId: +categoryInp.value,
		images: [imageInp.value],
	};
	axios({
		url: 'https://api.escuelajs.co/api/v1/products/',
		method: 'post',
		data: productObj,
	})
		.then(ress => {
			products = ress.data;
			getProducts();
		})
		.catch(err => {
			console.log(err);
		});
}

function getCategorys() {
	axios({
		url: 'https://api.escuelajs.co/api/v1/categories',
		method: 'get',
	})
		.then(res => {
			categorys = res.data;
			drawCategory();
		})
		.catch(err => {
			console.log(err);
		});
}

getCategorys();

function drawCategory() {
	let s = `<option value="">Select category</option>`;

	for (let i = 0; i < categorys.length; i++) {
		s += `
			<option value="${categorys[i].id}">
				${categorys[i].name}
			</option>
		`;
	}

	categoryInp.innerHTML = s;
}

// <!-- ===== MODAL ===== -->

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
