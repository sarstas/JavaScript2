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
   constructor(container = '.products') {
      this.container = container;
      this._goods = [];
      this._addedGoods = [];
   }

   sun() {
      return this._goods.reduce((sum, { price }) => sum + price, 0);
   }

   fetchGoods() {
      this._goods = [
         {id: 1, title: 'Notebook', price: 20000},
         {id: 2, title: 'Mouse', price: 1500},
         {id: 3, title: 'Keyboard', price: 5000},
         {id: 4, title: 'Gamepad', price: 4500},
      ];
   }

   addedItems () {
      this._addedGoods = [
         //в этот массив будут падать товары после нажания на кнопку добавить
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

class CartItem extends GoodsItem {
   constructor(title, price, quantity){
      super(title, price);
      this.quantity = quantity; 
   }

   render() {
      return `<div class="products__card">
                  <h3 class="products__title"> ${this.title}</h3>
                  <span class="products__price"> ${this.price}</span>
                  <span class="products__quantity">Количество: ${this.quantity}</span>
                  <span class="products__cost">Стоимость: ${this.quantity * this.price}</span>
               </div>`;
   }
}

class CartsList extends GoodsList {          
   constructor(addedGoods) {           
      super(addedGoods);            //обратились к родительскому классу и постучались к массиву добавленых товаров
   }


   render() {
      let listHtml = '';
      this.addedGoods.forEach(good => {
         const goodItem = new GoodsItem(good.title, good.price);
         listHtml += goodItem.render();
      });
      document.querySelector('.products').innerHTML = listHtml;
   }
}

const itemCart = new CartItem();
console.log(itemCart);

const list = new GoodsList();

//const item = new GoodsItem();
//console.log(item);

list.fetchGoods();
list.render();