function calculate(start, stop){
let primeNumbers = [];

function checkPrime(num){
let y = 2;
while (y < num) {
if (num % y === 0) {
return false
}
y = y+1
}
return true
}

let x = start;
console.log(x)
while (x <= stop) {
if (x > 1) {
if (checkPrime(x) === true) {
primeNumbers.push(x)
}
}
x = x + 1
}

console.log(primeNumbers)

//To display the result on the page
const answerDisplay = document.querySelector('#answers')
answerDisplay.innerText = 'The prime numbers from ' + start + ' to ' + stop + ' are: '

primeNumbers.forEach(num=>{
let current = answerDisplay.innerText
answerDisplay.innerText = current + ' ' + num + ', '
})
}

const button = document.querySelector('#button')

button.onclick =()=>{
const rangeStart = document.querySelector('#range-start>input').value*1
const rangeStop = document.querySelector('#range-stop>input').value*1
if(rangeStart != "" && rangeStop != "") {
calculate(rangeStart, rangeStop)
}else{
alert('invalid Input')
}
};
