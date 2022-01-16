function sendData() {
    var xhr = new XMLHttpRequest();
    var id = event.target.id;

    var url = "/product/?id=" + id;
    xhr.open("GET", url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    let listProduct;
    xhr.onload = () => {
        console.log(xhr.response);
        listProduct = xhr.response;
        console.log(listProduct.length)
        createTable(listProduct);


    }


    xhr.send();

}

function createTable(list) {
    if (document.getElementById("newTable")) {
        document.getElementById("newTable").remove();
    }
    let table = document.createElement('table');
    table.setAttribute("id", "newTable");
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

// Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
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
// Creating and adding data to second row of the table


    // let row_2 = document.createElement('tr');
    // let row_2_data_1 = document.createElement('td');
    // var link = document.createElement('a');
    //
    // link.href = 'http://google.ru';
    // link.appendChild(document.createTextNode('ссылка'));
    // row_2_data_1.appendChild(link);
//row_2_data_1.innerHTML = "1.";
//     let row_2_data_2 = document.createElement('td');
//     row_2_data_2.innerHTML = "James Clerk";
//     let row_2_data_3 = document.createElement('td');
//     row_2_data_3.innerHTML = "Netflix";


    for (let x = 0; x <list.length; x++){

        let row_data = document.createElement('td');
        row_data.innerHTML = x+1;

        var row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
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


    // row_2.appendChild(row_2_data_1);
    // row_2.appendChild(row_2_data_2);
    // row_2.appendChild(row_2_data_3);
    // tbody.appendChild(row_2);


// Creating and adding data to third row of the table
//     let row_3 = document.createElement('tr');
//     let row_3_data_1 = document.createElement('td');
//     row_3_data_1.innerHTML = "2.";
//     let row_3_data_2 = document.createElement('td');
//     row_3_data_2.innerHTML = "Adam White";
//     let row_3_data_3 = document.createElement('td');
//     row_3_data_3.innerHTML = "Microsoft";
//
//     row_3.appendChild(row_3_data_1);
//     row_3.appendChild(row_3_data_2);
//     row_3.appendChild(row_3_data_3);
//     tbody.appendChild(row_3);
}