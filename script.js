// const formula = document.getElementById('formula');
// const output = document.getElementById('display');
// const clear = document.getElementById('clear');
// const divide = document.getElementById('divide');
// const multiply = document.getElementById('multiply');
// const subtract = document.getElementById('subtract');
// const add = document.getElementById('add');
// const equals = document.getElementById('equals');
// const decimal = document.getElementById('decimal');
// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
// const four = document.getElementById('four');
// const five = document.getElementById('five');
// const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');
// const nine = document.getElementById('nine');
// const zero = document.getElementById('clear');

// const btns = document.querySelectorAll('button')

// let number = '';
// let result;

// //alert('hello');

// btns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     //console.log(e.target.value);
//     if (e.target.value === 'AC') {
//       number = '';
//       formula.innerText = "";
//       output.innerText = "0";
//       console.log('number', number);
//     } else if (e.target.value === '=') {
//       if (number[number.length - 1] === '/') {
//         number = number.slice(0, -1);
//         result = eval(number);
//       } else if (number[number.length - 1] === '*') {
//         number = number.slice(0, -1);
//         result = eval(number);
//       } else if (number[number.length - 1] === '+') {
//         number = number.slice(0, -1);
//         result = eval(number);
//       } else if (number[number.length - 1] === '-') {
//         number = number.slice(0, -1);
//         result = eval(number);
//       } else {
//         result = eval(number);
//       }
//       output.innerText = result;
//       // console.log('result', result);
//     } else {
//       number += e.target.value;
//       output.innerText = e.target.value;
//       //console.log('number', number);
//       formula.innerText = number;
//     }
//   })
// })


function App() {
  const [display, setDisplay] = React.useState("")
  const [result, setResult] = React.useState()
  const [num, setNum] = React.useState(0)

  const displayNum = (e) => {
    const numClicked = e.target.value
    setDisplay(prev => prev + numClicked)
    if (numClicked === '+' || numClicked === '-' || numClicked === '/' || numClicked === '*') {
      setNum(numClicked)
    } else {
      setNum(prev => {
        if (prev === '0') {
          setNum(0)
          setDisplay("")
        }
        if (prev === '+' || prev === '-' || prev === '*' || prev === '/' || prev === 0 || prev === '.') {
          
          let newNum = prev + numClicked;
          let toDisplay = newNum.substring(1)
          return toDisplay;
        } else {
          return prev + numClicked;
        }
      })
    }
  }

  const clear = () => {
    setDisplay("")
    setNum(0)
  }

  const equals = (e) => {
    const numClicked = e.target.value;
    setDisplay(prev => {
      let res = eval(display);
      return prev + numClicked + res;
    })
    setNum(eval(display))
  }


  return (
    <div className="main">
      <div className="container">
        <div id="formula" className="formulaScreen">{display}</div>
        <div id="display" className="output">{num}</div>
        <div className="grid">
          <button onClick={clear} id="clear" className="AC btn" value="AC">AC</button>
          <button onClick={displayNum} id="multiply" className="times btn" value="*">x</button>
          <button onClick={displayNum} id="divide" className="divide btn" value="/">/</button>
          <button onClick={displayNum} id="seven" className="seven btn" value="7">7</button>
          <button onClick={displayNum} id="eight" className="eight btn" value="8">8</button>
          <button onClick={displayNum} id="nine" className="nine btn" value="9">9</button>
          <button onClick={displayNum} id="subtract" className="minus btn" value="-">-</button>
          <button onClick={displayNum} id="four" className="four btn" value="4">4</button>
          <button onClick={displayNum} id="five" className="five btn" value="5">5</button>
          <button onClick={displayNum} id="six" className="six btn" value="6">6</button>
          <button onClick={displayNum} id="add" className="plus btn" value="+">+</button>
          <button onClick={displayNum} id="one" className="one btn" value="1">1</button>
          <button onClick={displayNum} id="two" className="two btn" value="2">2</button>
          <button onClick={displayNum} id="three" className="three btn" value="3">3</button>
          <button onClick={equals} id="equals" className="equals btn" value="=">=</button>
          <button onClick={displayNum} id="zero" className="zero btn" value="0">0</button>
          <button onClick={displayNum} id="decimal" className="decimal btn" value=".">.</button>
        </div>
      </div>
      <p>made by Mila</p>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);