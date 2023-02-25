let nums =  [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
let posNums = []
let posSum = 0
let posProduct = 1
let negNums = []


//bubble sort function
function bblSort(arr){
    
    for(let i = 0; i < arr.length; i++){
       
      for(let j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
}


//#1
for(i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        posNums.push(nums[i])
        posSum+= nums[i]
        posProduct = posProduct * nums[i]
    }
    else{
        negNums.push(nums[i])
    }
}

console.log(`#1 \n Позитивні елементи: ${posNums}; \n Їх сумма: ${posSum}; \n Їх кількість: ${posNums.length};`)
console.log(negNums)

//#2
bblSort(negNums)
let minNum = negNums[0]
for(let i = 0; i < nums.length; i++){
    if( nums[i] === minNum){
        console.log(`#2 \n Найменший елемент масиву ${minNum} за індексом ${i}`)
    }
}

//#3
bblSort(posNums)
let maxNum = posNums[posNums.length - 1]
for(let i = 0; i < nums.length; i++){
    if( nums[i] === maxNum){
        console.log(`#3 \n Найбільший елемент масиву ${maxNum} за індексом ${i}`)
    }
}
//4
console.log(`#4 \n Кількість негативних елементів ${negNums.length}`)

//5 - 9
let posEvenNumSum = 0
let posOddNumSum = 0
let posOddNum = []
let posEvenNum = []
for(let i = 0; i < posNums.length; i++){
    if( posNums[i] % 2 === 0 ){
        posEvenNum.push(posNums[i])
        posEvenNumSum +=posNums[i]
    }
    else{
        posOddNum.push(posNums[i])
        posOddNumSum += posNums[i]
    }
}
console.log(`#5 - 9 \n кількість непарних позитивних елементів ${posOddNum.length} \n 
кількість парних позитивних елементів ${posEvenNum.length} \n 
сумa парних позитивних елементів ${posEvenNumSum} \n 
суму непарних позитивних елементів ${posOddNumSum} \n
добуток позитивних елементів ${posProduct}` )

//10
for(let i = 0; i < nums.length; i++){
    if( nums[i] != maxNum){
        nums[i] = 0
    }
    else{
        nums[i] = nums[i]
    }
}
console.log(`#10 \n ${nums}`)