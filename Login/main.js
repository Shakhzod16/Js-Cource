// ====== Elementlarni olish ======
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('user-form');

// ====== Foydali funksiyalar ======
function setError(input) {
	input.style.border = '2px solid red';
}
function setSuccess(input) {
	input.style.border = '2px solid green';
}

// ====== Foydalanuvchilarni chiqarish ======
function renderUsers() {
	const users = JSON.parse(localStorage.getItem('users')) || [];
	const tbody = document.getElementById('users-body');
	tbody.innerHTML = '';

	users.forEach((user, index) => {
		const tr = document.createElement('tr');
		const maskedPassword = '*'.repeat(user.password.length);

		tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${maskedPassword}</td>
      <td>${user.date}</td>
    `;
		tbody.appendChild(tr);
	});
}
renderUsers(); // sahifa yuklanganda chiqariladi

// ====== Formani tekshirish ======
if (form) {
	form.addEventListener('submit', e => {
		e.preventDefault();
		validateForm();
	});
}

function validateForm() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confirmPasswordValue = confirmPassword.value.trim();
	const hasNumber = /\d/;

	// Username
	if (!usernameValue) setError(username);
	else setSuccess(username);

	// Email
	if (!emailValue || !emailValue.endsWith('.com')) setError(email);
	else setSuccess(email);

	// Parol
	if (!passwordValue || passwordValue.length < 8 || !hasNumber.test(passwordValue)) setError(password);
	else setSuccess(password);

	// Parol tasdiqlash
	if (!confirmPasswordValue || passwordValue !== confirmPasswordValue) setError(confirmPassword);
	else setSuccess(confirmPassword);

	// Agar hammasi to‘g‘ri bo‘lsa
	if (
		usernameValue &&
		emailValue.endsWith('.com') &&
		passwordValue.length >= 8 &&
		hasNumber.test(passwordValue) &&
		passwordValue === confirmPasswordValue
	) {
		saveUser(usernameValue, emailValue, passwordValue);
		form.reset();
	}
}

// ====== LocalStorage ga saqlash ======
function saveUser(usernameVal, emailVal, passwordVal) {
	const user = {
		username: usernameVal,
		email: emailVal,
		password: passwordVal,
		date: new Date().toLocaleString(),
	};

	const users = JSON.parse(localStorage.getItem('users')) || [];
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));

	renderUsers();
}
