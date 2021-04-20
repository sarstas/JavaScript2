'use strict';
const products = [
   {id: 1, title: 'Notebook', price: 20000},
   {id: 2, title: 'Mouse', price: 1500},
   {id: 3, title: 'Keyboard', price: 5000},
   {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = 'Temporary plug', price = 'Temporary plug') => {
   return `<div class="products__card">
            <h3 class="products__title">${title}</h3>
            <p class="products__price">price: <span class="products__price-col">${price}</span> rub</p>
            <button class="products__btn by-btn">Add to card</button>
         </div>`;
};

const renderProducts = (list) => {
   document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item.title, item.price)).join("");;
};

renderProducts(products);