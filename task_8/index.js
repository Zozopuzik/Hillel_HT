//#1
// let arr = [1, 2, 3, 'str', {}, 10]
// let averageOfNumbers = (arr) => {
//     let count = 0;
//     let sum = 0; 
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number') {
//         sum += arr[i];
//         count++;
//       }
//     }
  
//     if (count > 0) {
//       console.log(sum / count)
//     } else {
//       console.log(0);
//     }
//   }
//   averageOfNumbers(arr)
//#2
// let doMath = (x, znak, y) => {
//     let result;
 
//     switch (znak) {
//       case '+':
//         result = x + y;
//         break;
//       case '-':
//         result = x - y;
//         break;
//       case '*':
//         result = x * y;
//         break;
//       case '/':
//         result = x / y;
//         break;
//       case '%':
//         result = x % y;
//         break;
//       case '^':
//         result = Math.pow(x, y);
//         break;
//       default:
//         result = "Невірний знак операції";
//     }
//     console.log(result)
//   }
//   doMath(2, '^', 5)
//3
// let fillArray = (rows, colls) => {
//     let mainArr = [] 
//     for(i = 0; i < rows; i++){
//         let secondaryArr = []
//         mainArr.push(secondaryArr)
//         for(j = 0; j < colls; j++){
//             let memberOfArr = prompt(`Введіть ${j+1}-ий елемент ${i+1}-го внутрішнього масиву`)
//             secondaryArr.push(memberOfArr)
//         }
//     }
//     console.log(mainArr)
// }
// fillArray(2, 2)
//#4
const formatter = (str) => str.toUpperCase()
const func = (str, ...args) => {
    let result = str
    let firstelement = args.slice(0, 1)
    let otherElements = args.slice(1)
    let functions = []
//first element logic
    if(typeof firstelement[0] === 'string'){
        for (const char of firstelement) {
            const re = new RegExp(char, 'g');
            result = result.replace(re, '');
          }
    }
//other elements logic
//dividing other elements into 2 groups: funcions and other stuff
for (const op of otherElements) {
    if(typeof op === 'function'){
        functions.push(op)
        otherElements.splice(otherElements.indexOf(op), 1)
    }
  }
  //replace all other stuff from our string
  for (const el of otherElements) {
    const re = new RegExp(el, 'g');
    result = result.replace(re, '');
  }
  //doing logic of our functions
  for(i = 0; i < functions.length; i++){
    result = functions[i](result)
  }
  console.log(result)
  };

  func("hello world", 'd', 'o', 'h', formatter) 

  