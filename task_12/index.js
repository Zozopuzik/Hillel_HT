class Calculator {
  calculateCalories (){
    let calSum = this.size.calories + this.stuffing.calories;
    if (this.topping) {
      calSum += this.topping.calories;
    }
    this.calSum = calSum;
  }
  
  calculatePrice (){
    let priceSum = this.size.price + this.stuffing.price;
    if (this.topping) {
      priceSum += this.topping.price;
    }
    this.priceSum = priceSum;
  }
}

class Hamburger extends Calculator {
  // Sizes
  static SIZE_SMALL = {
    size: "small",
    price: 50,
    calories: 20,
  };

  static SIZE_BIG = {
    size: "big",
    price: 100,
    calories: 40,
  };

  // Stuffing
  static STUFFING_CHEESE = {
    stuffing: "cheese",
    price: 10,
    calories: 20,
  };

  static STUFFING_SALAD = {
    stuffing: "salad",
    price: 20,
    calories: 5,
  };
  static STUFFING_POTATO = {
    stuffing: "potato",
    price: 15,
    calories: 10,
  };

  // Toppings
  static TOPPING_MAYO = {
    topping: "mayo",
    price: 20,
    calories: 5,
  };

  static TOPPING_SAUSE = {
    topping: "sause",
    price: 15,
    calories: 0,
  }; 
  addToping(topping){
    if(topping === Hamburger.TOPPING_MAYO){
      this.topping = Hamburger.TOPPING_MAYO
    }
    else{
      this.topping = Hamburger.TOPPING_SAUSE
    }
  }
  constructor(size, stuffing) {
    super();
    this.size = size;
    this.stuffing = stuffing;
  }
}

let hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
hamburger.addToping(Hamburger.TOPPING_MAYO)

console.log(hamburger, hamburger.calculateCalories(), hamburger.calculatePrice());
