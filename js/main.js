'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; 


class List {
   constructor(url, container) {
      this.container = container;
      this.url = url;
      this.goods = [];
      this.allPrducts = [];
      this._init();
   }

   getJson(url) {
      return fetch(url ? url : `${API + this.url}`)
         .then(result => result.json())
         .catch(error => {
            console.log(error);
         });
   }

   handleData(data) {
      this.goods = data;
      this.render();
   }

   calcTotalPtice() {
      return this._goods.reduce((sum, item) => sum + item.price, 0);
   }

   render() {
      const block = document.querySelector(this.container);
      for (let product of this.goods){
         console.log(this.constructor.name);

         //const productObj = new this.list[this.constructor.name](product);

         let productObj = null;
         if (this.constructor.name === 'ProductList') productObj = new ProductItem(product);
         if (this.constructor.name === 'Cart') productObj = new CartItem(product);
         
         if (!productObj){
            console.log("Хрень получилась");
            return;
         } 

         console.log(productObj);
         this.allPrducts.push(productObj);
         block.insertAdjacentHTML('beforeend', productObj.render());
      }
   }

   _init(){
      return false;
   }
}

class Item {
   constructor(product, img='https://via.placeholder.com/200x150') {
      this.product_name = product.product_name;
      this.price = product.price;
      this.id_product = product.id_product;
      this.img = img;
   }

   render() {
      return ``
   }
}

class ProductList extends List {
   constructor(cart, container = '.products', url = "/catalogData.json") {
      super(url, container);
      this.cart = cart;
      this.getJson()
      .then(data => this.handleData(data));
   }

   _init() {
      document.querySelector(this.container).addEventListener('click', e => {
         if(e.target.classList.contains('buy-btn')){
            this.cart.addProduct(e.target);
         }
      });
   }
}

class ProductItem extends Item{
   render() {
      return `<div class="product-item" data-id="${this.id_product}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price} \u20bd</p>
                     <button class="buy-btn" 
                        data-id = "${this.id_product}"
                        data-name = "${this.product_name}"
                        data-price = "${this.price}">Купить</button>
                  </div>
               </div>`;
      }
}

class Cart extends List {
   constructor(container = ".cart-block", url = "/getBasket.json") {
      super(url, container);
      this.getJson()
      .then(data => {
         this.handleData(data.contents);
      });
   }
      
   addProduct(elem) {
      this.getJson(`${API}/addToBasket.json`)
      .then( data => {
         if(data.result === 1){
            let productId = +elem.dataset['id'];
            let find = this.allProducts.find(product => product.id_product === productId);   
            if(find){
               find.quantity++;
               this._updateCart(find);
            } else {
               let product = {
                  id_product: productId,
                  price: +elem.dataset['price'],
                  product_name: elem.dataset['name'],
                  quantity: 1
               };

               this.goods = [product];
               this.render();
            }
         } else {
            alert('Error');
         }
      })
   }

   removeProduct(elem) {
      this.getJson(`${API}/deleteFromBasket.json`)
         .then( data => {
            if(data.result === 1){
               let productId = +elem.dataset['id'];
               let look = this.allProducts.find( product => product.id === productId);
               if(look.quantity > 1) {
                  look.quantity--;
                  this._updateCart(look); 
               } else {
                  this.allPrduct.plice(this.allProducts.indexOf(look), 1);
                  document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
               }
            } else {
               alert('Error');
            }
         })
         .catch(data => console.log(data));
   }

   _updateCart(product) {
      let block = document.querySelector(`.cart-item[data-id="${product.id_product}"]`);
      block.querySelector('.product-quantity').textContent = `Количество: ${product.quantity}`;
      block.querySelector('.product-price').textContent = `${product.quantity * product.price} ₽`;
   }

   _init() {
      document.querySelector('.btn-cart').addEventListener('click', () => {
         document.querySelector(this.container).classList.toggle('invisible');
      });

      document.querySelector(this.container).addEventListener('click', e => {
         if(e.target.classList.contains('del-btn')){
            this.removeProduct(e.target);
         }
      })
   }
}

class CartItem extends Item {
   constructor(product, img = 'https://via.placeholder.com/50x100'){
      super(product, img);
      this.quantity = product.quantity;
   }
   render(){
         return `<div class="cart-item" data-id="${this.id_product}">
                     <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                           <p class="product-title">${this.product_name}</p>
                           <p class="product-quantity">Количество: ${this.quantity}</p>
                           <p class="product-single-price">${this.price} за ед.</p>
                        </div>
                     </div>
                     <div class="right-block">
                        <p class="product-price">${this.quantity * this.price} ₽</p>
                        <button class="del-btn" data-id="${this.id_product}">&times;</button>
                     </div>
                  </div>`;
         }
}

let getRequest = (url) => {                           //дз передалать
   return new Promise ((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
         if (xhr.readyState === 4){
            if (xhr.status !== 200) {
               reject(`Error ${xhr.status} ${xhr.statusText}`);
               } else {
                     resolve(xhr.responseText);
               } 
         }
      };
      xhr.send();
   });
};


new ProductList(new Cart());
