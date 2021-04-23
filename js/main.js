'use strict';

class GoodsItem {
   constructor(title, price) {
      this.title = title;
      this.price = price;
   }
   render() {
      return `<div class="products__card">
                  <h3 class="products__title">${this.title}</h3>
                  <p class="products__price">price: <span class="products__price-col">${this.price}</span> rub</p>
                  <button class="products__btn by-btn">Add to card</button>
               </div>`;
   }
}

class GoodsList {
   constructor() {
      this.goods = [];
   }

   fetchGoods() {
      this.goods = [
         {id: 1, title: 'Notebook', price: 20000},
         {id: 2, title: 'Mouse', price: 1500},
         {id: 3, title: 'Keyboard', price: 5000},
         {id: 4, title: 'Gamepad', price: 4500},
      ];
   }
   
   render() {
      let listHtml = '';
      this.goods.forEach(good => {
         const goodItem = new GoodsItem(good.title, good.price);
         listHtml += goodItem.render();
      });
      document.querySelector('.products').innerHTML = listHtml;
   }
}

const list = new GoodsList();
list.fetchGoods();
list.render();