const openModalBtn = document.getElementById('open_modal_btn');
const productsArea = document.getElementById('products_area');
const form = document.getElementById('form');
const loadingElement = document.getElementById('loading');

const saveCategoryInp = document.getElementById('category_inp');

const saveBtn = document.getElementById('save_btn');
const categoryAddBtn = document.getElementById('open');

openModalBtn.addEventListener('click', openModal);
saveBtn.addEventListener('click', handleSave);
categoryAddBtn.addEventListener('click', openCategoryModal);

let products = [];
let categorys = [];
let soqchi = '';
let loading = false;

let titleInp = form[0];
let descriptionInp = form[1];
let priceInp = form[2];
let categoryInp = form[4];
let imageInp = form[5];

function getProducts() {
	loading = true;
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
		})
		.finally(() => {
			loading = false;
			drawLoader();
		});
}
getProducts();

function drawLoader() {
	if (loading) {
		loadingElement.classList.remove('d-none');
	} else {
		loadingElement.classList.add('d-none');
	}
}

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
			<div class="d-flex justify-content-between align-items-center">
       <button  class="btn btn-primary">Add card</button>
			 <div class="btn-group gap-2">
        <button onclick="deleteProduct(${products[i].id})" class="btn btn-danger">🗑️</button>
      <button onclick="editProduct(${products[i].id}) " class="btn btn-warning">✏️</button>

			 </div>
			</div>

    </div>
  </div>
		`;
	}
	productsArea.innerHTML = s;
}

function handleSave() {
	if (!titleInp.value || !priceInp.value || !descriptionInp.value || !categoryInp.value || !imageInp.value) {
		alert('Barcha maydonlarni to‘ldiring!');
		return;
	}

	let productObj = {
		title: titleInp.value,
		price: Number(priceInp.value),
		description: descriptionInp.value,
		categoryId: Number(categoryInp.value),
		images: [imageInp.value],
	};

	if (soqchi === '') {
		axios
			.post('https://api.escuelajs.co/api/v1/products', productObj)
			.then(() => {
				getProducts();
				closeModal();
				form.reset();
			})
			.catch(err => {
				console.log(err.response.data);
				alert('CREATE error (400) — data noto‘g‘ri');
			});
	} else {
		axios
			.put('https://api.escuelajs.co/api/v1/products/' + soqchi, productObj)
			.then(() => {
				getProducts();
				closeModal();
				soqchi = '';
				form.reset();
			})
			.catch(err => {
				console.log(err.response.data);
				alert('UPDATE error');
			});
	}
}

function deleteProduct(id) {
	axios({
		url: 'https://api.escuelajs.co/api/v1/products/' + id,
		method: 'delete',
	})
		.then(() => {
			getProducts();
		})
		.catch(err => {
			console.log(err);
		});
}

function editProduct(id) {
	openModal();

	let currentProduct = products.find(item => item.id === id);

	if (!currentProduct) {
		console.log('Product topilmadi');
		return;
	}

	titleInp.value = currentProduct.title;
	descriptionInp.value = currentProduct.description;
	priceInp.value = currentProduct.price;
	imageInp.value = currentProduct.images[0];
	categoryInp.value = currentProduct.category.id;

	soqchi = currentProduct.id;
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

	document.activeElement?.blur();
	modal.hide();

	openModalBtn.focus();
}

function openCategoryModal() {
	const myModal = document.getElementById('category_Modal');
	const modal = new bootstrap.Modal(myModal);
	modal.show();
}

function closeCategoryModal() {
	const myModal = document.getElementById('category_Modal');
	const modal = bootstrap.Modal.getInstance(myModal);
	modal.hide();
}
