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

const actions = document.querySelectorAll('.action');
const equals = document.querySelector('#equals');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const output = document.querySelector('#output');

let numberOne = '';
let numberTwo = '';
let operator ='';
output.textContent = '';
let lastInput = null;

function nextAction(e) {

    //ensures no division by 0
    if ((e.target.textContent == '÷' || 
        e.target.textContent == 'x' || 
        e.target.textContent == '-' || 
        e.target.textContent == '+' || 
        e.target.textContent == '=') 
        && 
        lastInput == '0' && operator == 'divide') {
        output.textContent = 'NICE TRY';
        return;
    }

    if(output.textContent == 'NICE TRY') {
        numberOne = '';
        numberTwo = '';
        operator ='';
        output.textContent = '';
        return;
    }

    //this section clears board, aborts the calculation, and leaves the func.
    if (e.target == clear) {
        numberOne = '';
        numberTwo = '';
        operator ='';
        output.textContent = '';
        return;
    }

    //this section handles pressing a number after =
    if (operator == 'equals' && !e.target.hasAttribute('id')) {
        numberOne = '';
        numberTwo = '';
        operator ='';
        output.textContent = '';
        let refresh = numberOne += e.target.textContent;
        output.textContent = refresh;
        return;
    }

    //this section handles pressing operators in succession
    if ((e.target.textContent == '÷' || 
        e.target.textContent == 'x' || 
        e.target.textContent == '-' || 
        e.target.textContent == '+' || 
        e.target.textContent == '=') 
        && 
        ((lastInput == '÷') || 
        (lastInput == 'x') || 
        (lastInput == '-') || 
        (lastInput == '+')
        )
        ||
        (e.target.textContent == '=' && lastInput == '='))
        {

        if (operator == 'divide' || operator == 'multiply' || operator == 'minus' || operator == 'plus') {
        operator = e.target.getAttribute('id');
        }

        return;
    }
    
    //this section handles the second number and prints the result to numberOne
    if (operator == 'divide' || operator == 'multiply' || operator == 'minus' || operator == 'plus') {
        
        if (operator == 'divide' && 
        e.target.hasAttribute('id')) {
            let result = Number(numberOne) / Number(numberTwo);
            numberTwo = '';
            operator = e.target.getAttribute('id');
            numberOne = result;
            }
        
        else if (operator == 'multiply' && 
        e.target.hasAttribute('id')) {
            let result = Number(numberOne) * Number(numberTwo);
            numberTwo = '';
            operator = e.target.getAttribute('id');
            numberOne = result;
            }   

        else if (operator == 'minus' && 
        e.target.hasAttribute('id')) {
            let result = Number(numberOne) - Number(numberTwo);
            numberTwo = '';
            operator = e.target.getAttribute('id');
            numberOne = result;
            }  
        
        else if (operator == 'plus' && 
        e.target.hasAttribute('id')) {
            let result = Number(numberOne) + Number(numberTwo);
            numberTwo = '';
            operator = e.target.getAttribute('id');
            numberOne = result;
            } 

        else {numberTwo += e.target.textContent}
    }
        
    //this section factors the first number
    else if (e.target == divide) {operator = 'divide'}
    else if (e.target == multiply) {operator = 'multiply'}
    else if (e.target == minus) {operator = 'minus'}
    else if (e.target == plus) {operator = 'plus'}
    else if (e.target.textContent == '=') {return}
    else if (output.textContent.includes('.') && e.target.textContent == '.') {return}

    else {numberOne += e.target.textContent}

    //this section determines what is displayed on-screen
    if (numberTwo >= 0 && 
        ((lastInput == '÷') || 
        (lastInput == 'x') || 
        (lastInput == '-') || 
        (lastInput == '+')
        )) {
        output.textContent = numberTwo;
    }
    else {output.textContent = numberOne}
}

//also creates an animation
function logAction(e) {
    output.classList.add('output-flash');
    setTimeout(() => {output.classList.remove('output-flash')}, 200);
    lastInput = e.target.textContent;
}


actions.forEach(action => action.addEventListener('click', nextAction));
actions.forEach(action => action.addEventListener('click', logAction));






