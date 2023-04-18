let fadeColors = (element) => {
  let i = 0;
  let colorFading = setInterval(() => {
    element.css({
      color: `${rainbowColors[i]}`,
    });
    if (i === rainbowColors.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 700);
};

let rainbowColors = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#0000FF",
  "#4B0082",
  "#EE82EE",
];
let changingColor = $(".colors");
fadeColors(changingColor);

$.ajax({
  url: "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json",
  method: "GET",
  dataType: "json",
  success: function (data) {
    render(data);
  },
  error: function (xhr, textStatus, errorThrown) {
    console.log("Error:", textStatus, errorThrown);
  },
});

let render = (data) => {
  console.log(data);
  let root = $("#root");
  console.log(root);
  root.append(
    `<img class="car" src="https://mc-astro.github.io/tesla-roadster-colors/img/${data[0].img}.jpg"></img>`
  );
  root.append(`<div class = 'color-name'>${data[0].title}</div>`);
  root.append(`<div class="color-picker"></div>`);
  data.forEach((element) => {
    let colorPicker = $(".color-picker");
    colorPicker.css({
      width: "50%",
      height: "auto",
      display: "flex",
      "justify-content": "space-around",
      "margin-left": "25%",
    });
    colorPicker.append(`<div class="color${data.indexOf(element)}"></div>`);
    let color = $(`.color${data.indexOf(element)}`);
    color.css({
      width: "40px",
      height: "60px",
      "background-color": element.color,
      "border-radius": "5px",
    });
    color.click(function () {
      let car = $(".car");
      let text = $(".color-name");
      car.attr(
        "src",
        `https://mc-astro.github.io/tesla-roadster-colors/img/${element.img}.jpg`
      );
      text.text(element.title);
    });
  });
};
