'use srtict';

class Hamburger {
   constructor(size, staffing, topping) {
      this.size = size;
      this.staffing = staffing;
      this.topping = topping;
   }

}

class HamburgerList {
   constructor() { 
      this.size = [];
      this.stuffing = [];
      this.topping = [];
      this.readyBurger = [];
   }

   fetchSize() {
      this.size = [
         {id: 1, size: 'Small', price: 50, colories: 20},
         {id: 2, size: 'Big', price: 100, colories: 40},
      ];
   }

   fetchStuffing() {
      this.stuffing = [
      {id: 1, stuffing: 'cheese', price: 10, colories: 20},
      {id: 2, stuffing: 'salad', price: 20, colories: 5},
      {id: 3, stuffing: 'potatoes', price: 15, colories: 10},
      ];
   }

   fetchTopping() {
      this.topping = [
         {id: 1, topping: 'spice', price: 15, colories: 0},
         {id: 2, topping: 'mayonnaise', price: 20, colories: 5},
      ];
   }

   render() {
      const container = document.querySelector('.burger__form');
      container.insertAdjacentHTML('beforeend', '<h3>Select burger size</h3>');
      this.size.forEach(element => {
         
      });   
   }

   
}

//class HamburgerSize {
//   constructor(product) {
//      this.id = product.id;
//      this.price = product.price;
//      this.calories = product.calories;
//      this.size = product.size;
//   }

//   renderBurgerSize() {
//      return `<p><input class="input-button" id="${this.id}" name="size" type="radio">${this.size}</p>`;
//   }
//}

//class HamburgerStaff {
//   constructor(product) {
//      this.id = product.id;
//      this.price = product.price;
//      this.calories = product.calories;
//      this.staffing = product.stuffing;
//   }

//   renderBurgerStaff() {
//      return `<p><input class="input-button" id="${this.id}" name="staff" type="radio">${this.staffing}</p>`;
//   }
//}

//class HamburgerTopp {
//   constructor(product) {
//      this.id = product.id;
//      this.price = product.price;
//      this.calories = product.calories;
//      this.topping = product.topping;
//   }

//   renderBurgerTopp() {
//      return `<p><input class="input-button" id="${this.id}" name="topp" type="radio">${this.topping}</p>`;
//   }
//}

//const test = new Hamburger();