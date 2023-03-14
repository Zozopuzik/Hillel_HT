
let ball = document.getElementById('ball')


let getRandomColor = (ball) => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    ball.style.backgroundColor = color
}
let move = (ball) =>{
let yCord = Math.floor(Math.random() * 301)
let xCord = Math.floor(Math.random() * 301)
ball.style.top = `${yCord}px`
ball.style.left = `${xCord}px`
// console.log(xCord, yCord)
}
let start = () =>{
    getRandomColor(ball)
    move(ball)
}
setInterval(start, 1000)