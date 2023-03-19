const block                = document.getElementById("block");
const field                = document.getElementById("field");
let isDucked               = false;
let fieldComputedstyles    = window.getComputedStyle(field);
let computedStyle          = window.getComputedStyle(block);

function getAbsoluteCoordinates(element) {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
}
//jumping
let jump = () => {
  let marginValue = parseInt(computedStyle.marginTop);

  if (marginValue > 10) {
    block.innerHTML = "Jump";
    marginValue -= 10;
    block.style.marginTop = `${marginValue}px`;
    setTimeout(() => {
      let marginValue = parseInt(computedStyle.marginTop);
      marginValue += 10;
      block.style.marginTop = `${marginValue}px`;
      block.innerHTML = "";
    }, 500);
  } else {
    marginValue = 0;
    block.style.marginTop = `${marginValue}px`;
    block.innerHTML = "Jump";
    setTimeout(() => {
      let marginValue = parseInt(computedStyle.marginTop);
      marginValue += 10;
      block.style.marginTop = `${marginValue}px`;
      block.innerHTML = "";
    }, 500);
  }
};
//   //shifting to the different sides
let shift = (side) => {
  if (side === "left") {
    let marginValue = parseInt(computedStyle.marginLeft);
    marginValue -= 10;
    if (
      marginValue >
      getAbsoluteCoordinates(field).left -
        parseInt(fieldComputedstyles.marginLeft)
    ) {
      block.style.marginLeft = `${marginValue}px`;
    } else {
      block.style.marginLeft = `${
        getAbsoluteCoordinates(field).left -
        parseInt(fieldComputedstyles.marginLeft)
      }px`;
      block.innerHTML = "БЕМС!";
      setTimeout(() => {
        let marginValue = parseInt(computedStyle.left);
        marginValue =
          getAbsoluteCoordinates(field).left -
          parseInt(fieldComputedstyles.marginLeft) +
          20;
        block.style.marginLeft = `${marginValue}px`;
        block.innerHTML = "";
      }, 200);
    }
  } else if (side === "right") {
    let marginValue = parseInt(computedStyle.marginLeft);
    marginValue += 10;
    if (
      marginValue <=
      parseInt(fieldComputedstyles.width) - parseInt(computedStyle.width)
    ) {
      block.style.marginLeft = `${marginValue}px`;
    } else {
      block.innerHTML = "БЕМС!";
      block.style.marginLeft = `${
        parseInt(fieldComputedstyles.width) - parseInt(computedStyle.width)
      }px`;
      setTimeout(() => {
        let marginValue = parseInt(computedStyle.left);
        marginValue =
          parseInt(fieldComputedstyles.width) -
          parseInt(computedStyle.width) -
          20;
        block.style.marginLeft = `${marginValue}px`;
        block.innerHTML = "";
      }, 200);
    }
  } else if (side === "bottom") {
    let marginValue = parseInt(computedStyle.marginTop);
    marginValue += 10;
    if (
      marginValue <=
      parseInt(fieldComputedstyles.height) - parseInt(computedStyle.height)
    ) {
      block.style.marginTop = `${marginValue}px`;
    } else {
      block.style.marginTop = `${
        parseInt(fieldComputedstyles.height) - parseInt(computedStyle.height)
      }px`;
      block.innerHTML = "БЕМС!";
      setTimeout(() => {
        let marginValue = parseInt(computedStyle.left);
        marginValue =
          parseInt(fieldComputedstyles.height) -
          parseInt(computedStyle.height) -
          20;
        block.style.marginTop = `${marginValue}px`;
        block.innerHTML = "";
      }, 200);
    }
  } else {
    let marginValue = parseInt(computedStyle.marginTop);
    marginValue -= 10;
    if (marginValue > 0) {
      block.style.marginTop = `${marginValue}px`;
    } else {
      block.style.marginTop = `0px`;
      block.innerHTML = "БЕМС!";
      setTimeout(() => {
        let marginValue = parseInt(computedStyle.left);
        marginValue = 20;
        block.style.marginTop = `${marginValue}px`;
        block.innerHTML = "";
      }, 200);
    }
  }
};
//   //duck(changing the height of the block)
let duck = () => {
  if (isDucked === false) {
    let widthValue = parseInt(computedStyle.width);
    let heightValue = parseInt(computedStyle.height);
    block.style.width = `${widthValue * 1.25}px`;
    block.style.height = `${heightValue * 0.6}px`;
    isDucked = true;
  } else {
    block.style.width = `100px`;
    block.style.height = `100px`;
    isDucked = false;
  }
};
//basical movement
function move(event) {
  if (
    event.key.charCodeAt() === 97 ||
    event.key === "ArrowLeft" ||
    event.key.charCodeAt() === 65
  ) {
    shift("left");
  } else if (
    event.key.charCodeAt() === 100 ||
    event.key === "ArrowRight" ||
    event.key.charCodeAt() === 68
  ) {
    shift("right");
  } else if (
    event.key.charCodeAt() === 115 ||
    event.key === "ArrowDown" ||
    event.key.charCodeAt() === 83
  ) {
    shift("bottom");
  } else if (
    event.key.charCodeAt() === 119 ||
    event.key === "ArrowUp" ||
    event.key.charCodeAt() === 87
  ) {
    shift("top");
  } else if (event.key.charCodeAt() === 32) {
    jump();
  } else if (event.key.charCodeAt() === 77 || event.key.charCodeAt() === 67) {
    duck();
  }
}

document.addEventListener("keydown", function (event) {
  getAbsoluteCoordinates(block);
  move(event);
  console.log("Key pressed: " + event.key.charCodeAt());
});
