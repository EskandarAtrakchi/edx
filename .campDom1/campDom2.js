document.querySelector('#ul1').addEventListener('click' , function (e) {

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if (e.target.matches('li')) {
        e.target.style.backgroundColor = 'red';
    }
});

const create = document.createElement('li');
const parent = document.querySelector('#ul1');

create.innerText = 'Runn';
create.setAttribute('id' , 'li7');
parent.appendChild(create);

/*
document.querySelector('#li1').addEventListener('click' , function (e) {
    console.log ('li1 clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});
document.querySelector('#li2').addEventListener('click' , function (e) {
    console.log ('li2 clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'red';
    }
});
document.querySelector('#li3').addEventListener('click' , function (e) {
    console.log ('li3 clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'yellow';
    }
});
document.querySelector('#li4').addEventListener('click' , function (e) {
    console.log ('li4 clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'black';
    }
});
document.querySelector('#li5').addEventListener('click' , function (e) {
    console.log ('li5 clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'pink';
    }
});
document.querySelector('#li6').addEventListener('click' , function (e) {
    console.log ('li6 clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'green';
    }
});
*/