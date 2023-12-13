function createOrder() {
    console.log(document.getElementById("mainDiv").className)
    let mainDiv;
    if (document.getElementById("orderDiv") === null) {
        mainDiv = document.createElement("div");
    } else {
        document.getElementById("orderDiv").remove()
        mainDiv = document.createElement("div");
    }
    mainDiv.setAttribute("id", "mainOrderDiv");
    mainDiv.setAttribute("class", "container")

    let orderIdDiv = document.createElement("div")
    let article = document.createElement("h1")
    article.innerText += "№ " + getOrderId();
    orderIdDiv.setAttribute("id", "orderIdDiv")
    orderIdDiv.setAttribute("class", "orderText")

    orderIdDiv.appendChild(article);
    mainDiv.appendChild(orderIdDiv);
    document.getElementById("mainDiv").appendChild(mainDiv);
}

function getOrderId(){

    //запрос к бд для получения нужного id
    return "13213";
}