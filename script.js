const buttons = document.querySelectorAll('.button');

function press(e) {
    e.target.classList.add('b-press')
    setTimeout(() => {e.target.classList.remove('b-press')}, 100);
}

buttons.forEach(button => button.addEventListener('click', press));

