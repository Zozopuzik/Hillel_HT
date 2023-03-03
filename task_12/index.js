// Setting variables
let size = '';
let stuffing = '';
let hamburger;
class Hamburger {
  // Sizes
  static SIZE_SMALL = {
    size: 'small',
    price: 50,
    calories: 20
  };
  
  static SIZE_BIG = {
    size: 'big',
    price: 100,
    calories: 40
  };
  
  // Stuffing
  static STUFFING_CHEESE = {
    stuffing: 'cheese',
    price: 10,
    calories: 20
  };
  
  static STUFFING_SALAD = {
    stuffing: 'salad',
    price: 20,
    calories: 5
  };
  static STUFFING_POTATO = {
    stuffing: 'potato',
    price: 15,
    calories: 10
  };

  
  // Toppings
  static TOPPING_MAYO = {
    price: 20,
    calories: 5
  };
  
  static TOPPING_SAUSE = {
    price: 15,
    calories: 0
  };

  constructor(objSize, objFeeling) {
    if (objSize && objFeeling) {
      this.size = objSize.size;
      this.price = objSize.price + objFeeling.price;
      this.calories = objSize.calories + objFeeling.calories;
    }
  }

  // Methods
  addTopping(obj_topping) {
    if (obj_topping === Hamburger.TOPPING_MAYO) {
      this.price += Hamburger.TOPPING_MAYO.price;
      this.calories += Hamburger.TOPPING_MAYO.calories;
    } else {
      this.price += Hamburger.TOPPING_SAUSE.price;
      this.calories += Hamburger.TOPPING_SAUSE.calories;
    }
  }

  calculateCalories() {
    return this.calories;
  }

  calculatePrice() {
    return this.price;
  }
}

// Functions
const selectSize = () => {
  const sizeSelector = document.getElementById("size_select").value;
  size = sizeSelector;
  console.log(size);
};

const selectStuffing = () => {
  const stuffingSelector = document.getElementById("filling_select").value;
  stuffing = stuffingSelector;
  console.log(stuffing);
};

const createBurger = () => {
  let userSize;
  let userStuffing;
  const price = document.getElementById("price");
  const calories = document.getElementById("calories");
  size === "small" ? (userSize = Hamburger.SIZE_SMALL) : (userSize = Hamburger.SIZE_BIG);
    if(stuffing === "cheese"){
    userStuffing = Hamburger.STUFFING_CHEESE
  }
    
    else if(stuffing === "salad"){
        userStuffing = Hamburger.STUFFING_SALAD
    }
    else if(stuffing === 'potato'){
        userStuffing = Hamburger.STUFFING_POTATO
    } 

    hamburger = new Hamburger(userSize, userStuffing);

  price.innerHTML = hamburger.calculatePrice();
  calories.innerHTML = hamburger.calculateCalories();
};


const addToping = document.getElementsByClassName('addToping');
for (let i = 0; i < addToping.length; i++) {
    addToping[i].addEventListener("click", function() {
      if(addToping[i].value === 'Add Mayo'){
        hamburger.addTopping(Hamburger.TOPPING_MAYO)
        price.innerHTML = hamburger.calculatePrice();
        calories.innerHTML = hamburger.calculateCalories();
      }
      else(hamburger.addTopping(Hamburger.TOPPING_SAUSE))
      price.innerHTML = hamburger.calculatePrice();
      calories.innerHTML = hamburger.calculateCalories();
    });
  }
