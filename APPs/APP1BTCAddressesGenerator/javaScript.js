//variables 

let btn = document.querySelector('#new-qoute');
let person = document.querySelector('.person');
let qoute = document.querySelector('.qoute');

const qoutes = [{
    qoute : 'mjhEpQ7xzBxfViqC2Cge5gBrvF9DipiTqn',
    person : 'BTC'
},
{
    qoute : 'mjrBQJuLxxpKC8UDpQX8FR69dEArNQiPTq',
    person : 'BTC'
}, ];

btn.addEventListener('click', function () {
    let Random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[Random].qoute;
    person.innerText = qoutes[Random].person;

});