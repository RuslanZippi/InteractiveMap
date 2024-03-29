let listProductPush = new Array();

class Product {
    name;
    count;

    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
}

function onClick() {
    let input = document.querySelector('#uploadPDF');

    input.setAttribute('accept', 'application/csv');
    let label = input.nextElementSibling
    let labelVal = label.querySelector('.uploadFileName').innerText;
    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.uploadFileName').innerText = '\n Выбрано файлов: ' + countFiles + "\n" + this.files[0].name;
        else
            label.querySelector('.uploadFileName').innerText = labelVal;
    });
    document.getElementById('inputButton').style.display = 'block';
}

function check() {
    let file = document.getElementById('uploadPDF');

    // console.log("file size: " + file.files[0].size)
    let fileData = new FormData();

    fileData.set('file', file.files[0], file.files[0].name);


    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";


    xhr.open('POST', '/uploadPdf', true)
    let listProduct;
    xhr.onload = () => {
        listProduct = xhr.response;
        createTableInStorage(listProduct);
    }
    xhr.send(fileData);
    if (document.getElementById("sendButton") == null) {
        createSendButton();
    }
}

function createSendButton() {
    let div = document.getElementById('managerDiv');
    let button = document.createElement('button');
    button.setAttribute('class', 'buttonManager');
    button.setAttribute('id', 'sendButton');
    button.innerHTML = "Отправить";
    button.addEventListener('click', () => {
        sendDataProduct();
        button.remove();
    })
    div.appendChild(button);
}

function allProduct() {
    let xhr = new XMLHttpRequest();
    let url = "/product/all";

    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    let listProduct;

    xhr.onload = () => {
        listProduct = xhr.response;
        createTableInStorage(listProduct)
    }
    xhr.send();
}

function checkTable() {
    let table = document.getElementById("tbodyId");
    let tableBody = table.childNodes;
    listProductPush = new Array();
    for (let x = 0; x < tableBody.length; x++) {

        let name = tableBody[x].childNodes[1].childNodes[0].innerHTML
        let type = tableBody[x].childNodes[2].innerHTML
        let count = tableBody[x].childNodes[3].childNodes[0].value
        listProductPush.push(new Product(name, count));
    }
    let jsonProduct = JSON.stringify(listProductPush);

    return jsonProduct;
}

function sendDataProduct() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('POST', '/product/update', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    let listProduct;
    console.log()
    xhr.onload = () => {
        listProduct = xhr.response;
        createAlert(listProduct)
    }
    xhr.send(checkTable());
}

function createAlert(listProduct) {
    let s = "";
    let k = "";
    console.log("listProduct: " + listProduct.length);
    for (let x = 0; x < listProduct.length; x++) {
        if (listProduct[x].status === false) {
            k = "Товары уже существуют: "
            s = s + listProduct[x].position + " ";
        } else {
            k = "Успешно добавлено!"
        }
    }

    if (s === "") {
        alert(k);
    } else {
        k = k + s + '\n' + "Обновить количество или дополнить ?";
        let buttonOk = document.createElement('button');
        buttonOk.setAttribute('class', 'buttonManager')
        buttonOk.innerHTML = "Обновить"
        buttonOk.addEventListener('click', () => {
            updateData(listProduct, false)
            dialog.close();
        })
        let buttonNo = document.createElement('button');
        buttonNo.setAttribute('class', "buttonManager");
        buttonNo.innerHTML = "Дополнить"
        buttonNo.addEventListener('click', () => {
            updateData(listProduct, true)
            dialog.close();
        })
        let dialog = document.createElement('dialog');
        let p = document.createElement('p');
        p.setAttribute('class', 'description')
        p.innerHTML = k;
        dialog.setAttribute('class', 'dialogStyle');
        dialog.appendChild(p);
        dialog.appendChild(buttonOk);
        dialog.appendChild(buttonNo);
        let mainBody = document.getElementById("body");
        mainBody.appendChild(dialog);
        dialog.showModal();
    }
}

function createTableInStorage(listProduct) {
    let table;
    if (document.getElementById("newTableInStorage") === null) {
        table = document.createElement("table");

    } else {
        document.getElementById("newTableInStorage").remove();
        table = document.createElement("table");

    }

    table.setAttribute("id", "newTableInStorage");
    table.setAttribute('class', 'tableStyle')
    table.setAttribute('display', 'inline')
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    tbody.setAttribute('id', 'tbodyId')
    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('managerTable').appendChild(table);

    let row_1 = document.createElement('tr');
    let number = document.createElement('th');
    number.innerHTML = "№";
    let productName = document.createElement('th');
    productName.innerHTML = "Название товара";
    let type = document.createElement('th');
    type.innerHTML = "Ед. измерения"
    let count = document.createElement('th');
    count.innerHTML = "Количество";

    let comment = document.createComment('th');
    comment.innerHTML = "Комментарий"

    row_1.appendChild(number);
    row_1.appendChild(productName);
    row_1.appendChild(type);
    row_1.appendChild(count);
    row_1.appendChild(comment);

    thead.appendChild(row_1);


    for (let x = 0; x < listProduct.length; x++) {

        let row = document.createElement('tr');
        let row_data = document.createElement('td');
        let row_data_1 = document.createElement('td');
        let row_data_2 = document.createElement('td');
        let row_data_3 = document.createElement('td');

        row_data.innerHTML = x + 1;
        row_data.setAttribute('id', 'row' + (x + 1));

        let link = document.createElement('a');
        let text = document.createElement('input');
        text.setAttribute('type', 'text')
        link.href = '/product-cart?id='+ listProduct[x].id;
        link.appendChild(document.createTextNode(listProduct[x].name))
        row_data_1.appendChild(link);
        row_data_2.innerHTML = listProduct[x].type
        text.setAttribute('value', listProduct[x].count);
        row_data_3.appendChild(text);
        row.appendChild(row_data);
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        tbody.appendChild(row);
    }
}

function updateData(listProduct, status) {
    let list = new Array();

    class ProductSave {
        Product;
        status;

        constructor(product, status) {
            this.Product = product;
            this.status = status;
        }
    }

    for (let x = 0; x < listProduct.length; x++) {
        if (!listProduct.status) {
            list.push(new ProductSave(listProductPush[x], status))
        }
    }

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/product/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // console.log(JSON.stringify(list))
    xhr.send(JSON.stringify(list));


}