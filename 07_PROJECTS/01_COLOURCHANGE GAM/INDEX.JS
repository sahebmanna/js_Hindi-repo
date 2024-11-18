const Button = document.querySelectorAll('.button')
const Body = document.querySelector('body')

Button.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id == 'white') {
            Body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'blue') {
            Body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'grey') {
            Body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'yellow') {
            Body.style.backgroundColor = e.target.id
        }
    });
});