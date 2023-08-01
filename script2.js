'use script'

const text = document.querySelector('.textQuestion');
const button = document.querySelector('.button')



const func = function() {
    if (text === 'manzana') {
        console.log('Correct! 🍎');
    }

}

document.addEventListener('click', func);
