//GET ELEMENT BY ID//
/* console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000'; */

//GET ELEMENT BY CLASS NAME//
/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hola 2';
items[1].getElementsByClassName.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow'; */

//var itemList = document.querySelector('#items');

// EVENTOS //
/* var button = document.getElementById('button').addEventListener
    ('click', buttonClick);

function buttonClick(e) {
    /*  console.log('button Clickeado') 
     document.getElementById('header-title').textContent = 'Cambiado';
     document.querySelector('#main').getElementsByClassName.backgroundColor = '#f4f4f4'; 
     console.log(e.target);
     console.log(e.target.id);
     console.log(e.target.className);
     console.log(e.target.classList);
     var output = document.getElementById('output');
     output.innerHTML = '<h3>'+ e.target.id +'</h3>';
 
     console.log(e.type); */

    /* console.log(e.clientY);
    console.log(e.clientX);

    console.log(e.offsetX);
    console.log(e.offsetY); */

    /* console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
} */

//var button = document.getElementById('button');
//var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

//box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

//itemInput.addEventListener('cut', runEvent); //detecta si cortó texto del input
//itemInput.addEventListener('paste', runEvent); //detecta si pegó texto en el input

//select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    //console.log(e.target.value);
    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    //output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
    //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
}