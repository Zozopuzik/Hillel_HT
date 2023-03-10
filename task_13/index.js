

function singleList(lengthOfList, value, valueIterator){
    let listOfObjects = []
    class Obj{
        constructor(){
            this.value = value
        }
    }
    for(i = 0; i < lengthOfList; i++){
        let obj = new Obj(value)
        listOfObjects.push(obj)
        value = value + valueIterator
    }
    for(i = 0; i < listOfObjects.length; i++){
         i != listOfObjects.length - 1 ? listOfObjects[i].next = listOfObjects[i+1] : listOfObjects[i].next = null
    }
    console.log(listOfObjects)
}

function doubleList(lengthOfList, value, valueIterator){
    let listOfObjects = []
    class Obj{
        constructor(){
            this.value = value
        }
    }
    for(i = 0; i < lengthOfList; i++){
        let obj = new Obj(value)
        listOfObjects.push(obj)
        value = value + valueIterator
    }
    for(i = 0; i < listOfObjects.length; i++){
         i != listOfObjects.length - 1 ? listOfObjects[i].next = listOfObjects[i+1] : listOfObjects[i].next = null
         i != 0 ? listOfObjects[i].prev = listOfObjects[i-1] : listOfObjects[i].prev = null
    }
    console.log(listOfObjects)
}

function circleList(lengthOfList, value, valueIterator){
    let listOfObjects = []
    class Obj{
        constructor(){
            this.value = value
        }
    }
    for(i = 0; i < lengthOfList; i++){
        let obj = new Obj(value)
        listOfObjects.push(obj)
        value = value + valueIterator
    }
    for(i = 0; i < listOfObjects.length; i++){
         i != listOfObjects.length - 1 ? listOfObjects[i].next = listOfObjects[i+1] : listOfObjects[i].next = listOfObjects[0]
    }
    console.log(listOfObjects)
}
singleList(3, 5, 2)
doubleList(3, 5, 2)
circleList(3, 5, 2)