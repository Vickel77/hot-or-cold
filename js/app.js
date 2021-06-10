
var output = document.querySelector("#display");
var body = document.querySelector('body');
var you = document.querySelector('.you');
var rand = document.querySelector('.computer');
var input = document.querySelector('input') ;
const computer = Math.floor(Math.random() * 100) + 0
const NUMBER =()=>{ 
  number = input.value
  console.log(number)
  if (number == "" || number == undefined || number == null ){
    output.innerHTML = "Enter a valid number"
    return
  }
  if (number - computer > 10) {
    output.innerHTML  = " TOO HOT!" 
    body.style.background = '-webkit-linear-gradient(45deg, yellow, rgb(192, 6, 6))'
  } else if (number > computer ) {
    output.innerHTML  = "HOTTER!" 
    body.style.background = '-webkit-linear-gradient(45deg, rgb(255, 123, 0), rgb(192, 6, 6))'
  } else if (number == computer) {
    output.innerHTML = "CORRECT" 
    body.style.background = '-webkit-linear-gradient(45deg, green, rgb(102, 255, 0))'
  } else if (computer - number > 10 ) {
    output.innerHTML = " TOO COLD!" 
    body.style.background = '-webkit-linear-gradient(45deg, rgb(0, 217, 255), rgb(0, 102, 255))'
  } else if (computer > number) {
    output.innerHTML = "COOLER!" 
    body.style.background = '-webkit-linear-gradient(45deg, rgb(0, 3, 196), rgb(6, 108, 192))'
  } else {output.innerHTML = "Guess a Number from 0 - 100"}

  you.innerHTML= `you guessed ${number}`
  rand.innerHTML= `The number was ${computer}`
}

var btn = document.querySelector('.button');

btn.addEventListener('click', ()=>NUMBER())
window.addEventListener("keypress", (e)=>{
  if(e.keyCode == 13){
    NUMBER()
  }
})

