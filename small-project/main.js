'use strict';

let time = document.querySelector('#time');

function updateClock() {
	let date = new Date();
	let hours = date.getHours().toString().padStart(2, '0');
	let minutes = date.getMinutes().toString().padStart(2, '0');
	let seconds = date.getSeconds().toString().padStart(2, '0');
	time.textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);

// ======== Second html ========
// ======== theird html ========

// Plus/minus quantity functionality
document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.order-item');

	items.forEach(item => {
		const plusBtn = item.querySelector('.plus');
		const minusBtn = item.querySelector('.minus');
		const countEl = item.querySelector('.count');

		plusBtn.addEventListener('click', () => {
			let count = parseInt(countEl.textContent);
			count++;
			countEl.textContent = count;
			updateTotal();
		});

		minusBtn.addEventListener('click', () => {
			let count = parseInt(countEl.textContent);
			if (count > 1) {
				count--;
				countEl.textContent = count;
				updateTotal();
			}
		});
	});

	function updateTotal() {
		let total = 0;
		const debt = 2;

		document.querySelectorAll('.order-item').forEach(item => {
			const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
			const count = parseInt(item.querySelector('.count').textContent);
			total += price * count;
		});

		document.querySelector('.price-total').textContent = `$${total.toFixed(2)}`;
		const finalTotal = total - debt;
		document.querySelector('.total-value').textContent = `$${finalTotal.toFixed(2)}`;
	}

	// Dastlabki hisobni yangilab qo'yamiz
	updateTotal();
});
