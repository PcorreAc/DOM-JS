var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

//Agregar item
function addItem(e) {
    e.preventDefault();
    // console.log(1);

    //GET input value
    var newItem = document.getElementById('item').value;
    //Crear nuevo element li 
    var li = document.createElement('li');
    //Agregar class
    li.className = 'list-group-item';
    //Agregar text node con input value
    li.appendChild(document.createTextNode(newItem));
    //Crear delete button element
    var deleteBtn = document.createElement('button');
    //Agregar class al delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    //Agregar text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Agregar button a li
    li.appendChild(deleteBtn);
    //Agregar li a list
    itemList.appendChild(li);
}

//Remover Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Estás Seguro?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Buscar Item
function filterItems(e) {
    //Convertir texto a lowercase
    var text = e.target.value.toLowerCase();
    //Obtener list
    var items = itemList.getElementsByTagName('li');
    //Convertir a un array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}