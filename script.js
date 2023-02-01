//animations

const buttons = document.querySelectorAll('.button');
const topButton = document.querySelectorAll('.top-button');

function press(e) {
    e.target.classList.add('b-press')
    setTimeout(() => {e.target.classList.remove('b-press')}, 100);
}


buttons.forEach(button => button.addEventListener('click', press));
topButton.forEach(button => button.addEventListener('click', press));

//calculations

const clear = document.querySelector('#clear');
const output = document.querySelector('#output');
const actions = document.querySelectorAll('.action');
const seven = document.querySelector('#seven');
const four = document.querySelector('#four');
const one = document.querySelector('#one');
const zero = document.querySelector('#zero');
const eight = document.querySelector('#eight');
const five = document.querySelector('#five');
const two = document.querySelector('#two');
const decimal = document.querySelector('#decimal');
const nine = document.querySelector('#nine');
const six = document.querySelector('#six');
const three = document.querySelector('#three');
const equals = document.querySelector('#equals');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');

let numberOne = '';
let numberTwo = '';
let operator ='';
output.textContent = '';

function nextAction(e) {

    //this section clears board, aborts the calculation, and leaves the func.
    if (e.target == clear) {
        numberOne = '';
        numberTwo = '';
        operator ='';
        output.textContent = '';
        return;
    }

    //if (output.textContent.length < 10) {
    
        //this section handles the second number and prints the result to numberOne
        if (operator == 'divide' || operator == 'multiply' || operator == 'minus' || operator == 'plus') {
            if (e.target == seven)
                {numberTwo += '7'}
            else if (e.target == four)
                {numberTwo += '4'}

            else if (operator == 'plus') {
                let result = Number(numberOne) + Number(numberTwo);
                numberTwo = '';
                numberOne = result;
                }
        }
        
        //this section factors the first number
        else if (e.target == seven)
            {numberOne += '7'}
        else if (e.target == four)
            {numberOne += '4'}
        else if (e.target == plus)
            {operator = 'plus'}


        //this section determines what is displayed on-screen
        if (numberTwo > 0) {
            output.textContent = numberTwo;
        }
        else {output.textContent = numberOne}

    //}

}


actions.forEach(action => action.addEventListener('click', nextAction));
//equals.addEventListener('click', solve);






