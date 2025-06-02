const randomColor = () => {
    const  hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 16 )
        let choosenCode = hex[randomNum]
        color += choosenCode
        // console.log(color)
    }
    return color
}
// console.log(randomColor())

let intervalID = null

document.getElementById('start').addEventListener("click", (e) => {
    current_id = e.target.id
        if(current_id){
            if(intervalID !== null){
                clearInterval(intervalID)
            }
            intervalID = setInterval(() => {
               document.body.style.backgroundColor = randomColor() 
        }, 1000)
}})

document.getElementById('stop').addEventListener("click", () => {
    if(intervalID !== null){
                clearInterval(intervalID)
            }
            intervalID = null
})