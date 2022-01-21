function sendData(event) {
    let xhr = new XMLHttpRequest();
    let id = event.target.id;

    let parentSvg = document.getElementById(id);
    let url = "/product/?id=" + id;
    xhr.open("GET", url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    let listProduct;
    xhr.onload = () => {
        listProduct = xhr.response;
        checkingTable(listProduct, parentSvg);
    }
    xhr.send();
}

function createTable(table,list) {

    table.setAttribute("id", "newTable");
    table.setAttribute('class', 'tableStyle')
    table.setAttribute('display', 'inline')
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');


    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('table').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "№";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Название товара";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Количество";

    row_1.appendChild(heading_1);

    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);


    for (let x = 0; x < list.length; x++) {

        let row_data = document.createElement('td');
        row_data.innerHTML = x + 1;

        var row = document.createElement('tr');
        let row_data_1 = document.createElement('td');

        row_data.setAttribute('id','firstColumn')

        let link = document.createElement('a');
        link.href = 'http://google.ru';
        link.appendChild(document.createTextNode(list[x].name))
        row_data_1.appendChild(link);
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = list[x].count
        row.appendChild(row_data);
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        tbody.appendChild(row)
    }
}

function checkingTable(list, parent) {
    if (listParentPol.length === 0) {
        parent.style.fill = "black";
        listParentPol.push(parent);

        table = document.createElement('table');
        createTable(table,list);
        listTable.push(table);
    } else {
        listParentPol[0].style.fill = "";
        let id = listParentPol[0].id;
        listParentPol.splice(0, 1);

        listTable[0].remove();
        listTable.splice(0,1);
        if (id !== parent.id) {
            parent.style.fill = "black";
            listParentPol.push(parent);


            table = document.createElement('table');
            createTable(table,list);
            listTable.push(table);
        }
    }
}