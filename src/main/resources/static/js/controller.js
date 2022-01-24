function createSvgMap() {
    if (document.getElementById('div1') === null){
        console.log("Create Svg map")
        let div = document.createElement("div");
        div.setAttribute('id', 'div1');
        div.setAttribute('class', 'text-center back')

        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('id', 'svg1');
        svg.setAttribute('class', 'mainSvg');
        svg.setAttribute('display', 'inline');

        svg.appendChild(createText('A', 89, 320));
        svg.appendChild(createText('B', 89, 470));
        svg.appendChild(createText('C', 89, 620));
        svg.appendChild(createText('D', 239, 750));
        svg.appendChild(createText('D', 398, 750));
        svg.appendChild(createText('F', 535, 520));
        svg.appendChild(createText('T', 270, 65));
        svg.appendChild(createText('M', 445, 66));

        svg.appendChild(createRect('A', 62, 252, 76, 116));
        svg.appendChild(createRect('B', 62, 402, 76, 116));
        svg.appendChild(createRect('C', 62, 551.5, 76, 116));
        svg.appendChild(createRect('D', 192.5, 701, 115, 77));
        svg.appendChild(createRect('E', 352.5, 701, 115, 77));
        svg.appendChild(createRect('T', 222.5, 22.5, 115, 66));
        svg.appendChild(createRect('M', 401.5, 22.5, 115, 66));
        svg.appendChild(createRect('Corob', 501.5, 152, 66, 116));
        svg.appendChild(createRect('Tools', 501.5, 451.5, 66, 116));


        let divTable = document.createElement('div');
        divTable.setAttribute('id', 'table');
        divTable.setAttribute('class', 'text-center back');

        div.appendChild(svg);
        div.appendChild(divTable);

        document.getElementById('mainDiv').appendChild(div);
    }
}

function createRect(id, x, y, width, height) {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    rect.setAttribute('id', id);
    rect.setAttribute('th:onClick', 'viewDiv2(event)');
    rect.setAttribute('class', 'square');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);

    return rect;

}