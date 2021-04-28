'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; 

class ProductList {
   constructor(container = '.products') {
      this.container = container;
      this._goods = [];
      this._allProducts = [];
      
      this._getProducts()
            .then((data) => {
               this._goods = data;
               this._render();
            });
   }

   async _getProducts() {
      try {
         const response = await fetch(`${API}/catalogData.json`);
         return await response.json();
      } catch (error) {
         console.log(error);
      } 

   }

   sumTotalPrice() {
      return this._goods.reduce((sum, { price }) => sum + price, 0);
   }

   _render() {
               const block = document.querySelector(this.container);  
               for (const good of this._goods) {
                     const productObject = new ProductItem(good);
                     this._allProducts.push(productObject);
                     block.insertAdjacentHTML('afterbegin', productObject.render());
               }
               block.insertAdjacentHTML('afterend', `<h3 class="">Total coast of goods</h3> ${this.sumTotalPrice()}`)
   }
}

class ProductItem{
   constructor(product, img = 'https://via.placeholder.com/200x150') {
         this.product_name = product.product_name;
         this.price = product.price;
         this.id = product.id;
         this.img = img;
   }

   render() {
               return `<div class="product-item" data-id="${this.id}">
                           <img src="${this.img}" alt="Some img">
                           <div class="desc">
                              <h3>${this.product_name}</h3>
                              <p>${this.price} \u20bd</p>
                              <button class="buy-btn">Купить</button>
                           </div>
                        </div>`;
            }

}

class CartList {
   constructor(container = '.products') {
      this.container = container;
      this._goods = [];
      this._allProducts = [];
      
      this._getProducts()
            .then((data) => {
               this._goods = data;
               this._render();
            });
   }
}


let getRequest = (url) => {                           //дз передалать
   return new Promise ((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== 4) return;
         
         if (xhr.status !== 200) {
               reject(`Error ${xhr.status} ${xhr.statusText}`);
         } else {
               resolve(xhr.responseText);
         }   
      };
      xhr.send();
   });
};





const pl = new ProductList();





//class CartsList extends GoodList {          
//   constructor(addedGoods) {           
//      super(addedGoods);            //обратились к родительскому классу и постучались к массиву добавленых товаров
//   }


//   render() {
//      let listHtml = '';
//      this.addedGoods.forEach(good => {
//         const goodItem = new GoodsItem(good.title, good.price);
//         listHtml += goodItem.render();
//      });
//      document.querySelector('.products').innerHTML = listHtml;
//   }
//}

//const itemCart = new CartItem();
//console.log(itemCart);



//const item = new GoodsItem();
//console.log(item);

//pl.fetchGoods();
//pl.render();



