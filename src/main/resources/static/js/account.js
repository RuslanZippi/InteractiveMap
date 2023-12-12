var listAllProduct = new Array();

function getAllProductInTable() {
    let xhr = new XMLHttpRequest();
    let url = "/allProduct";

    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
        listAllProduct = xhr.response;
        console.log(listAllProduct.length)
        createTableAllProduct(listAllProduct);
    }
    xhr.send();
}

function createTableAllProduct(list) {
    let table;
    if (document.getElementById('tableAllProduct') === null) {

        table = document.createElement('table');
    } else {
        document.getElementById('tableAllProduct').remove();
        table = document.createElement('table');
    }
    table.setAttribute("id", "tableAllProduct");
    table.setAttribute('class', 'tableStyle')
    table.setAttribute('display', 'inline')
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');


    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('mainDivInAccount').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "№";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Название товара";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Количество";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Позиция";

    row_1.appendChild(heading_1);

    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);


    for (let x = 0; x < list.length; x++) {

        let row_data = document.createElement('td');
        row_data.innerHTML = x + 1;

        var row = document.createElement('tr');
        let row_data_1 = document.createElement('td');

        row_data.setAttribute('id', 'firstColumn')

        let link = document.createElement('a');
        link.href = '/product-cart?id=' + list[x].id;
        link.appendChild(document.createTextNode(list[x].name))
        row_data_1.appendChild(link);
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = list[x].count

        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = list[x].position;
        row.appendChild(row_data);
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        tbody.appendChild(row)
    }
}