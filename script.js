'use strict';

// document.querySelector('.message').textContent = 'Djes djes';
// document.querySelector('.number').textContent = 21;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'Please enter a number';
    }
})