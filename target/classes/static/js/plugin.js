function viewDiv2() {
    if (document.getElementById("div2").style.display === "inline") {
        document.getElementById("div2").style.display = "none";
    } else {
        document.getElementById("div2").style.display = "inline";

    }
}

// function viewDiv2(){
// window.open("https://www.google.ru/");
// };
$("#square1").click(function () {
    location.href = "/map"
})