const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];
let list = document.getElementById('list')


class Vegetable{
    constructor(obj){
        this.type = `Vegetable`;
        if(obj.season){
            this.seasonKoef = 1.3;
        }
        this.name = obj.name
        this.icon = obj.icon
        this.price = obj.price

    }

    getPrice(){
       if(this.seasonKoef){
        this.price =  this.price * this.seasonKoef
       }
       else{
        console.log(this.price)
       }
        console.log(this.seasonKoef )
    }
    getInfo(){
        this.getPrice()
        list.innerHTML += `<li id = "${this.name}"></li>`
        let vegetable = document.getElementById(`${this.name}`)
        for (let key in this) {
          vegetable.innerHTML += ` ${key}: ${this[key]}. `  
          }
    }

}
const tomato = new Vegetable(vegetables[0])
const carrot = new Vegetable(vegetables[1])
const corn = new Vegetable(vegetables[2])
tomato.getInfo()
carrot.getInfo()
corn.getInfo()
