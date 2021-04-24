'use sctrict';

class Burger {
   constructor(size, price, caloriesNumber, staffing, topping=[]) {
      this.size = size;
      this.price = price;
      this.caloriesNumber = caloriesNumber;
      this.staffing = staffing;
      this.topping = topping;
   }


   calculatePrice() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.price + this.staffing.getPrice() + this.topping
      .map(i => i.getPrice)
      .reduce(reducer);
   }

   getSize() {  
      return this.size;
   }

   calculateCalories() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.caloriesNumber + this.staffing.getCalories() + this.topping.map(i => i.getCalories).reduce(reducer); 
   }

   getStaffing() {
      return this.staffing;
   }

   
}

class BurgerBuilder {
   constructor(size, price, caloriesNumber) {

   }


}

class Staffing {
   constructor(id, name, price, caloriesNumber){
      this.id = id;
      this.name = name;
      this.price = price;
      this.caloriesNumber = caloriesNumber;
   }
   
   getPrice(){
      return this.price;
   }

   getCalories() {
      return this.caloriesNumber;
   }

   render() {
      //const block = document.querySelector('.burger__set-stuff');
      //block.insertAdjacentHTML('deforeend', `
      //<legend>Select stuffing</legend>
      //<label>
      //   <input type ="radio" name = "topping">
      //   Name: ${this.name} <br>
      //   Calories: ${this.caloriesNumber} <br>
      //   Price: ${this.price}
      //</label>`
      //);
      //return block;
      return `
         <input type ="radio" name = "topping">
            Name: ${this.name} <br>
            Calories: ${this.caloriesNumber} <br>
            Price: ${this.price}
         </>`;
   }
}

class Topping {
   constructor(id, name, price, caloriesNumber){
      this.id = id;
      this.name = name;
      this.price = price;
      this.caloriesNumber = caloriesNumber;
   }

   getPrice(){
      return this.price;
   }

   getCalories() {
      return this.caloriesNumber;
   }

   render() {
      const block = document.querySelector('.burger__set-topp');
      block.insertAdjacentHTML('deforeend', `
      <legend>Select stuffing</legend>
      <label>
         <input type ="radio" name = "topping">
         Name: ${this.name} <br>
         Calories: ${this.caloriesNumber} <br>
         Price: ${this.price}
      </label>`
      );
      return block;
   }
}

class BurgerList {
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
      //const block = document.querySelector('.burger__form');
      //block.insertAdjacentHTML('beforeend', "<h3>Select burger size</h3>");
      //this.size.forEach(element => {
      //   const subBlock = ;
      //});
      let ListHTML = '';
      this.fetchStuffing.forEach(element => {
         const stuffItem = new Staffing( );

      });
   }
}