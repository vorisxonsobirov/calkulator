// const box = document.createElement("div")
// document.body.appendChild(box)
// box.classList.add("box")


// const ButtomDec = document.createElement("button")
// box.appendChild(ButtomDec)
// ButtomDec.innerHTML = "Pluss1"
// ButtomDec.classList.add('ButtomDec')


// const ButtomINC = document.createElement("button")
// box.appendChild(ButtomINC)
// ButtomINC.innerHTML = "Minus1"
// ButtomINC.classList.add('ButtomINC')


// let counter = 0
// const result = document.createElement("h1")
// result.classList.add('result')
// result.innerText = counter
// box.appendChild(result)


// ButtomDec.addEventListener("click", () => {
//     counter = counter + 1
//     result.innerText = counter
// })
// ButtomINC.addEventListener("click", () => {
//     counter = counter - 1
//     result.innerText = counter
// })


// const Buttom10 = document.createElement("button")
// box.appendChild(Buttom10)
// Buttom10.innerHTML = "pluss10"
// Buttom10.classList.add('Buttom10')

// Buttom10.addEventListener("click", () => {
//     counter = counter + 10
//     result.innerText = counter
// })

// const Buttom11 = document.createElement("button")
// box.appendChild(Buttom11)
// Buttom11.innerHTML = "minus10"
// Buttom11.classList.add('Buttom11')

// Buttom11.addEventListener("click", () => {
//     counter = counter - 10
//     result.innerText = counter
// })

// const Buttom12 = document.createElement("button")
// box.appendChild(Buttom12)
// Buttom12.innerHTML = "clear"
// Buttom12.classList.add('Buttom12')

// Buttom12.addEventListener("click", () => {
//     counter = counter = 0
//     result.innerText = counter
// })


//--------------------------------------------------\\


const box1 = document.createElement("div")
document.body.appendChild(box1)
box1.classList.add("box1")

const box2 = document.createElement("div")
box1.appendChild(box2)
box2.classList.add("box2")

const Button1 = document.createElement("button")
box1.appendChild(Button1)
Button1.innerHTML = "+ 1"
Button1.classList.add('Button1')

let counter = 0
const result = document.createElement("h1")
result.classList.add('result')
result.innerText = counter
box2.appendChild(result)

const Button2 = document.createElement("button")
box1.appendChild(Button2)
Button2.innerHTML = "0"
Button2.classList.add('Button2')

Button2.addEventListener("click", () => {
    counter = counter = 0
    result.innerText = counter
})

Button1.addEventListener("click", () => {
    counter = counter + 1
    result.innerText = counter
    if (counter === 33) {
        window.navigator.vibrate([200, 200, 200, 200])
    } else if (counter == 66){
        window.navigator.vibrate([200, 200, 200, 200])
    } else if (counter == 99){
        window.navigator.vibrate([200, 200, 200, 200])
    }
})
// const vibration = 