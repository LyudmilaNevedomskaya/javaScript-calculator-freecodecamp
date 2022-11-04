const formula = document.getElementById('formula');
const output = document.getElementById('output');
const clear = document.getElementById('clear');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('clear');

const btns = document.querySelectorAll('button')

let number = '';
let result;

alert('hello');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    //console.log(e.target.value);
    if (e.target.value === 'AC') {
      number = '';
      formula.innerText = "";
      output.innerText = "0";
      console.log('number', number);
    } else if (e.target.value === '=') {
      if (number[number.length - 1] === '/') {
        number = number.slice(0, -1);
        result = eval(number);
      } else if (number[number.length - 1] === '*') {
        number = number.slice(0, -1);
        result = eval(number);
      } else if (number[number.length - 1] === '+') {
        number = number.slice(0, -1);
        result = eval(number);
      } else if (number[number.length - 1] === '-') {
        number = number.slice(0, -1);
        result = eval(number);
      } else {
        result = eval(number);
      }
      output.innerText = result;
      // console.log('result', result);
    } else {
      number += e.target.value;
      output.innerText = e.target.value;
      //console.log('number', number);
      formula.innerText = number;
    }
  })
})


