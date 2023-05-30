class Calculator {
  calculateCalories() {
    let calSum = this.size.calories + this.stuffing.calories;
    if (this.topping) {
      this.topping.forEach((element) => (calSum += element.calories));
    }
    this.calSum = calSum;
  }

  calculatePrice() {
    let priceSum = this.size.price + this.stuffing.price;
    if (this.topping) {
      this.topping.forEach((element) => (priceSum += element.price));
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
  addToping(topping) {
    if (topping === Hamburger.TOPPING_MAYO) {
      this.topping.push(Hamburger.TOPPING_MAYO);
    } else {
      this.topping.push(Hamburger.TOPPING_SAUSE);
    }
  }
  constructor(size, stuffing) {
    super();
    this.topping = [];
    this.size = size;
    this.stuffing = stuffing;
  }
}

let submitButton = document.querySelector('input[name="submit"]');
let getOrderInfo = () => {
  let burgerSizeInput = document.querySelector('select[name="burgerSize"]');
  let stuffingInputs = document.querySelectorAll('input[name="stuffing"]');
  let spicesInputs = [...document.querySelectorAll('input[name="spices[]"]')];
  let formData = {
    burgerSize: burgerSizeInput.value,
    stuffing: "",
    spices: [],
  };

  stuffingInputs.forEach((input) => {
    if (input.checked) {
      formData.stuffing = input.value;
    }
  });
  spicesInputs.forEach((input) => {
    if (input.checked) {
      formData.spices.push(input.value);
    }
  });
  return formData;
};
let createUserHamburger = (formData) => {
  formData.burgerSize === "small"
    ? (formData.burgerSize = Hamburger.SIZE_SMALL)
    : (formData.burgerSize = Hamburger.SIZE_BIG);
  formData.stuffing === "cheese"
    ? (formData.stuffing = Hamburger.STUFFING_CHEESE)
    : formData.stuffing === "salad"
    ? (formData.stuffing = Hamburger.STUFFING_SALAD)
    : (formData.stuffing = Hamburger.STUFFING_POTATO);
  let toppings = [];
  formData.spices.forEach((element) =>
    element === "mayo"
      ? toppings.push(Hamburger.TOPPING_MAYO)
      : toppings.push(Hamburger.TOPPING_SAUSE)
  );
  let userBurger = new Hamburger(formData.burgerSize, formData.stuffing);
  toppings.forEach((element) => userBurger.addToping(element));
  userBurger.calculateCalories();
  userBurger.calculatePrice();
  return userBurger;
};
let createOrder = (obj) => {
  let orderMessageInput = document.querySelector(
    'textarea[name="orderMessage"]'
  );
  obj.orderMessage = orderMessageInput.value;
  let clientNameInput = document.querySelector('input[name="clientName"]');
  let orderList = document.getElementById("orders");
  let order = document.createElement("div");
  order.className = "order";
  let toppingArr = [];
  obj.topping.forEach((element) => toppingArr.push(element.topping));
  order.innerHTML = `
Привет <b>${clientNameInput.value}!</b>
</br>
Ваш заказ:
<br/>
<b>${obj.size.size}</b> бургер с <b>${obj.stuffing.stuffing}</b> и <b>${
    obj.topping ? toppingArr.join(", ") : "без добавок"
  }</b> будет готов в течении <b>${Math.floor(Math.random() * 10) + 1}</b> минут
</br>
<b>Стоимость заказа: ${obj.priceSum} тугриков ( ${obj.calSum} каллорий )</b>
`;
  orderList.appendChild(order);
};

let clearForm = () => {
  let clientNameInput = document.querySelector('input[name="clientName"]');
  let burgerSizeInput = document.querySelector('select[name="burgerSize"]');
  let stuffingInputs = document.querySelectorAll('input[name="stuffing"]');
  let spicesInputs = [...document.querySelectorAll('input[name="spices[]"]')];
  let orderMessageInput = document.querySelector(
    'textarea[name="orderMessage"]'
  );

  clientNameInput.value = "";
  burgerSizeInput.value = "";
  stuffingInputs.forEach((input) => (input.checked = false));
  spicesInputs.forEach((input) => (input.checked = false));
  orderMessageInput.value = "";
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = getOrderInfo();
  let userBurger = createUserHamburger(formData);
  createOrder(userBurger);
  clearForm();
});
