let arr                 = []
let maxItemsArr         = 0
let product             = 1
let userChooseTheRightNum = false
while(userChooseTheRightNum != true){
    maxItemsArr = prompt('Choose the length of your array. It should be longer than 2 but shorter than 10')
    if(Math.round(Math.abs(maxItemsArr)) > 2 && Math.round(Math.abs(maxItemsArr)) < 10){
        userChooseTheRightNum = true
        for(i = 0; i < maxItemsArr; i++){
            arr.push(Math.round(Math.random()*10))
        }
        console.log(arr)
        for(j = 0; j < maxItemsArr; j++){
            product = product * arr[j]
        }
        console.log(product)
    }
}

