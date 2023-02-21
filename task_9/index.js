

let obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    },
    foo3:{
        a: 6
    }
} 
let newObj = {}
function convert(obj) {

    for(let key in obj){  
        if(typeof obj[key] != 'object' ){
            newObj[key] = obj[key]
        }else{
            for(let secondKey in obj[key]){
                newObj[secondKey] = obj[key][secondKey]
            }
        }
    }
}
convert(obj)
console.log(newObj)
