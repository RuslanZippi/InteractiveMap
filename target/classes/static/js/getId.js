

function getId(event) {
    let id = event.target.id;

    let parentSvg = document.getElementById(id);

    createStyle(parentSvg);
    console.log("Tag: " + event.target.tagName)
    console.log("id " + event.target.id);
    console.log("id parent: " + event.target.parentNode.id)
}