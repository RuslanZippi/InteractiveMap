

function createOrder() {

    let mainDiv;
    if (document.getElementById("mainOrderDiv") === null) {
        mainDiv = document.createElement("div");
    } else {
        document.getElementById("mainOrderDiv").remove()
        mainDiv = document.createElement("div");
    }
    mainDiv.setAttribute("id", "mainOrderDiv");
    mainDiv.setAttribute("class", "container")

    let orderIdDiv = document.createElement("div")
    let article = document.createElement("h1")
    article.innerText += "№ " + getOrderId();
    orderIdDiv.setAttribute("id", "orderIdDiv")
    orderIdDiv.setAttribute("class", "orderText")
    //createDateDiv();
    orderIdDiv.appendChild(article);
    mainDiv.appendChild(orderIdDiv);
    mainDiv.appendChild(createDateDiv())
    mainDiv.appendChild(createRecipientField())
    document.getElementById("mainDiv").appendChild(mainDiv);
    searchProductTest();
}

function getOrderId(){

    //запрос к бд для получения нужного id
    return "13213";
}

function sendDataToCreateOrder(elementList){
    let xhr = new XMLHttpRequest();
    let url = "/product/createOrder";

    xhr.responseType = "json";
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");

//    xhr.onload = () => {
//        listAllProduct = xhr.response;
//        console.log(listAllProduct.length)
//        createTableAllProduct(listAllProduct);
//    }
    xhr.send(JSON.stringify(elementList));
    }
function createDateDiv(){
    let dateDiv = document.createElement("div");
    dateDiv.setAttribute("id","orderDateDiv");
    dateDiv.setAttribute("class","orderDate");
    let date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("id", "dateId");
    dateDiv.appendChild(date);
    console.log();
    dateDiv.appendChild(createButton("orderDateButton", "Сохранить",onClickDateButton));
    return dateDiv;
}

function createButton(id,text,onclick){
     let dateButton = document.createElement("button");
     dateButton.setAttribute("id",id);
     dateButton.setAttribute("class","buttonManager");
     dateButton.innerText =text;
     dateButton.onclick = onclick;
     return dateButton;
}

function onClickDateButton(){
let recipient = document.getElementById("recipientTextId");
    if(recipient.value===""){
        alert("Получатель не указан")
    }
    else{
    console.log(recipient.value)}
    if(document.getElementById('tableOrderList') === null){
    alert("Товар не добавлен")
    }
    else{
    console.log("Сохранение")
    let tBody = document.getElementById("tbodyID");
    //console.log(tBody.getElementsByTagName("tr").length)
    let list = getCount();
    console.log("SIZE: " + list[2].name)
    sendDataToCreateOrder(list)
    }
    //console.log("Сохранение")
}

function getCount(){
 let tBody = document.getElementById("tbodyID");
 let trList  = tBody.getElementsByTagName("tr");
 let elementList = new Array()
 for(let x = 0 ; x < trList.length;x++){
 let  element = new Element;
 element.id = trList[x].getElementsByTagName("td")[0].innerHTML;
 element.name = trList[x].getElementsByTagName("td")[1].innerHTML;
 element.count = trList[x].getElementsByTagName("td")[2].children[0].value;

//console.log("Id = " + trList[x].getElementsByTagName("td")[0].innerHTML)
// console.log("Name = " + trList[x].getElementsByTagName("td")[1].innerHTML)
// console.log("Count = " + trList[x].getElementsByTagName("td")[2].children[0].value)

 elementList.push(element);
 }

return elementList;

}

class Element{
    name;
    id;
    count;
}
function createRecipientField(){
// добавить css стиль
    let field = document.createElement("p")
    field.setAttribute("id","recipientFieldId");
    field.innerText = "Получатель"
    let text = document.createElement("input");
    text.setAttribute("type", "text");
    text.setAttribute("id","recipientTextId");

    field.appendChild(text);

    return field;
}
function createOrderTableList(element){
    let table;
    let thead ;
    let tbody;
        if (document.getElementById('tableOrderList') === null) {
            table = document.createElement('table');
        table.setAttribute("id", "tableOrderList");
        table.setAttribute('class', 'tableStyle')
        table.setAttribute('display', 'inline')
        thead = document.createElement('thead');
        thead.setAttribute("id","theadID");
        tbody = document.createElement('tbody');
        tbody.setAttribute("id","tbodyID");

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "id";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Название товара";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Количество";
        row_1.appendChild(heading_1);

                row_1.appendChild(heading_2);
                row_1.appendChild(heading_3);
                thead.appendChild(row_1);
        }
        else{

        table = document.getElementById("tableOrderList");
        thead = document.getElementById("theadID");
        tbody = document.getElementById("tbodyID");
        }

        if(document.getElementById(element.id) === null){
         var row = document.createElement('tr');
                row.setAttribute("id", element.id);
        let row_data_1 = document.createElement('td');

        row_data_1.innerHTML = element.id;
        let row_data_2 = document.createElement('td');

        row_data_2.innerHTML = element.name;
        let row_data_3 = document.createElement('td');

        let input = document.createElement("input");
        input.setAttribute("type","text");
        row_data_3.appendChild(input);

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
         row.appendChild(row_data_3);
        tbody.appendChild(row)

        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('mainOrderDiv').appendChild(table);
        }
        else{
        alert("Позиция уже добавлена")
        }



}
function onClickAddButton(){
       let addLineDiv;
       if(document.getElementById("addLineDiv")===null){
       addLineDiv = document.createElement("div");
       }
       else{
       document.getElementById("addLineDiv").remove()
       addLineDiv = document.createElement("div");
       }
       addLineDiv.setAttribute("id","addLineDiv");
       let xhr = new XMLHttpRequest();
           let url = "/allProduct";

           xhr.responseType = "json";
           xhr.open("GET", url);
           xhr.setRequestHeader("Content-Type", "application/json");

           xhr.onload = () => {
               listAllProduct = xhr.response;

           }
           xhr.send();

          let searchBar;
          if(document.getElementById("addProductField")===null){
          searchBar = document.createElement("input");
          }
          else{
          document.getElementById("addProductField").remove
          searchBar = document.createElement("input");
          }

          searchBar.setAttribute("type", "text");
          searchBar.setAttribute("id","addProductField");
          searchBar.addEventListener("input", function(event) {

          let elementList = new Array();

              let index = 0;
              for(let x = 0;x <listAllProduct.length;x++){
                if(listAllProduct[x].name.includes(event.target.value.toLowerCase())){
                elementList[index] = (listAllProduct[x]);
                index++;
                }
              }
              printSearchElement(elementList);
          });
          //printSearchElement(elementList);
          addLineDiv.appendChild(searchBar);
          document.getElementById("mainOrderDiv").appendChild(addLineDiv);

}

function printSearchElement(elementList){
      let listElementDiv;
      if (document.getElementById("listElementDiv")!=null){
      document.getElementById("listElementDiv").remove()
      listElementDiv = document.createElement("div");
      }else{
      listElementDiv = document.createElement("div");
      }
      listElementDiv.setAttribute("id", "listElementDiv");
      for(let x = 0; x <elementList.length;x++){
      if(elementList.length <6){
      listElementDiv.appendChild(createButtonSearchElement(elementList[x]));
      listElementDiv.innerHTML +=  "<br>";
      }
      }

      document.getElementById("addLineDiv").appendChild(listElementDiv);
}
function createLinkSearchElement(element){
    let link = document.createElement("a");
    link.href = "/product-cart?id=" + element.id;
    link.text = element.name;
    return link;
}

function createButtonSearchElement(element){
       let button = document.createElement("button");
        button.setAttribute("value",element.id + "_" + element.name)
        button.setAttribute("onclick", "onClickAddSearchElement(value)")
        button.innerText = element.name;
       return button;
}
function onClickAddSearchElement(value){
    let element = new ElementP();
    element.id = value.split("_")[0];
    element.name = value.split("_")[1];

    createOrderTableList(element);
}
class ElementP{
 name;
 id;
}
function searchProductTest(){
       document.getElementById("mainOrderDiv").appendChild(createButton("addProduct","Добавить", onClickAddButton))
}
