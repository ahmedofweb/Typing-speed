const names = document.querySelector("h2")
const input = document.querySelector("#input")
const score = document.querySelector("#score")
const modalScore = document.querySelector("#modal-score")
const timer = document.querySelector("#timer")
const modalBtn = document.querySelector("#modal-btn")
const modal = document.querySelector(".modal")
const btnModal = document.querySelector("#btn-modal")
const record = document.querySelector("#record")
const btnGo = document.querySelector(".btn-Go")

let randomW
let score0 = 0
let time = 10
let record0 = 0

function randomWord() {
    const random= Math.floor(Math.random()* words.length)
    names.textContent = words[random]
    randomW = words[random]
}
randomWord()

input.addEventListener("input", () => {
    if(randomW == input.value){
        randomWord()
        input.value = ""
        score0++
        time += 5
    }
    score.textContent = score0
    
})



setInterval(() => {
    if(time !== 0){
        time--
        timer.textContent = `00:${time < 10 ? "0" + time : time}`
    }else{
        modal.classList.remove("hidden")
        document.querySelector(".overlay").classList.remove("hidden")
        modalScore.textContent = score0
    }
    if(time <= 5){
        timer.style.color = "red"
    }else{
        timer.style.color = "#0c6a0c"
    }
 }, 1000);


btnModal.addEventListener("click", ()=> {
    if(record0 < score0){
        record0 = score0
        record.textContent = record0
        modalScore.textContent = `New record:${score0}`
    }

    modal.classList.add("hidden")
    document.querySelector(".overlay").classList.add("hidden")
    randomWord()
    modalScore.textContent = "0"
    score.textContent = "0"
    input.value = ""
    score0 = 0
    time = 10
})
