function createOrder() {
    console.log(document.getElementById("mainDiv").className)
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
}

function getOrderId(){

    //запрос к бд для получения нужного id
    return "13213";
}

function createDateDiv(){
    let dateDiv = document.createElement("div");
    dateDiv.setAttribute("id","orderDateDiv");
    dateDiv.setAttribute("class","orderDate");
    let date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("id", "dateId");


//    document.getElementById("orderDateDiv").addEventListener("change", function(){
//    let input = this.value
//    labelDate.innerText += input});
    dateDiv.appendChild(date);
    console.log();
    dateDiv.appendChild(crateDateButton());
    return dateDiv;
}

function crateDateButton(){
     let dateButton = document.createElement("button");
     dateButton.setAttribute("id","orderDateButton");
     dateButton.setAttribute("class","buttonManager");
     dateButton.innerText +="Сохранить";
     dateButton.onclick = onClickDateButton;
     return dateButton;
}

function onClickDateButton(){
// сохранение ордера
    console.log("Сохранение")
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
