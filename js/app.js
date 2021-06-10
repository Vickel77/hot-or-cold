var number;


var output = document.querySelector("#display");
var body = document.querySelector('body');
var you = document.querySelector('.you');
var rand = document.querySelector('.computer');
const NUMBER =()=>{ 
  const computer = Math.floor(Math.random() * 100) + 0
  number = prompt("Guess a number!");
  console.log(computer)
  if (number == "" || number == undefined || number == null ){
    output.innerHTML = "Guess a Number from 0 - 100"
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
NUMBER();

var btn = document.querySelector('.button');

btn.addEventListener('click', ()=>NUMBER())
window.addEventListener("keypress", (e)=>{
  if(e.keyCode == 13){
    NUMBER()
  }
})

