const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button){
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        current_id = e.target.id
        if(current_id){
            body.style.backgroundColor = current_id
        }
    })
})