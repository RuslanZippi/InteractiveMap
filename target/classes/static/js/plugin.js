var listSvg = new Array();
var listParent = new Array();
var listParentPol = new Array();
var listTable = new Array();

/*
Создание схемы полок, аналогично схеме склада, с помощью svg компонентов.
*/
function viewDiv2(event) {
    let id = event.target.id;

    let parentSvg = document.getElementById(id);
    let div = document.getElementById("div1");
    createStyle(parentSvg);
    addSvgInDiv(div, createSVG(id));

}
/*
создание svg элементов по id стеллажа.
 */
function createSVG(id) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "shelf" + id;

    if (id === 'Tools' || id === 'T' || id === 'M') {
        svg.setAttribute('width', '600');
        svg.setAttribute('height', '600');
        svg.setAttribute('class', 'svg3');
        svg.setAttribute('display', 'inline');

        svg.appendChild(createMainText(id,200,50));
        svg.appendChild(createText(1, 280, 100))
        svg.appendChild(createText(2, 280, 200))
        svg.appendChild(createText(3, 280, 280))
        svg.appendChild(createText(4, 280, 370))
        svg.appendChild(createText(5, 280, 460))


        svg.appendChild(createPolygon(svg, '103,491 478,491 478,444 367.5,444 367.5,426 232,426 232,457 103,457', 1));
        svg.appendChild(createPolygon(svg, '103,400 478,400 478,353 367.5,353 367.5,335 232,335 232,366 103,366', 2));
        svg.appendChild(createPolygon(svg, '108,309 483,309 483,262 372.5,262 372.5,244 237,244 237,275 108,275', 3));
        svg.appendChild(createPolygon(svg, '109,216 484,216 484,169 373.5,169 373.5,151 238,151 238,182 109,182', 4));
        svg.appendChild(createPolygon(svg, '108,124 483,124 483,77 372.5,77 372.5,59 237,59 237,90 109,90', 5));
    } else if (id === 'Corob') {
        svg.setAttribute('width', '600');
        svg.setAttribute('height', '600');
        svg.setAttribute('class', 'svg4');
        svg.setAttribute('display', 'inline');

        svg.appendChild(createMainText(id,200,30));
        svg.appendChild(createText(1, 280, 100))
        svg.appendChild(createText(2, 280, 280))
        svg.appendChild(createText(3, 280, 450))

        svg.appendChild(createPolygon(svg, '109,457 484,457 484,408 373.5,408 373.5,390 238,390 238,421 109,421', 1));
        svg.appendChild(createPolygon(svg, '109,284.5 484,284.5 484,237 373.5,237 373.5,219 238,219 238,251 109,251', 2));
        svg.appendChild(createPolygon(svg, '109,114.5 484,114.5 484,67 373.5,67 373.5,49 238,49 238,81 109,81', 3));


    } else {
        svg.setAttribute('width', '600');
        svg.setAttribute('height', '600');
        svg.setAttribute('class', 'svg2');
        svg.setAttribute('display', 'inline');


        svg.appendChild(createMainText(id,200,50));
        svg.appendChild(createText(1, 110, 470))
        svg.appendChild(createText(2, 300, 470))
        svg.appendChild(createText(3, 470, 470))
        svg.appendChild(createText(4, 110, 320))
        svg.appendChild(createText(5, 300, 320))
        svg.appendChild(createText(6, 470, 320))
        svg.appendChild(createText(7, 110, 165))
        svg.appendChild(createText(8, 300, 165))
        svg.appendChild(createText(9, 470, 165))


        svg.appendChild(createPolygon(svg, '67.5,484 183,484 183,462 158,462 158,428 102,428 102,452.5 67.5,452.5', 1));
        svg.appendChild(createPolygon(svg, '245.5,484 361,484 361,462 336,462 336,428 280,428 280,452.5 245.5,452.5', 2));
        svg.appendChild(createPolygon(svg, '411.5,484 527,484 527,462 502,462 502,428 445.5,428 445.5,452.5 411.5,452.5', 3));
        svg.appendChild(createPolygon(svg, '68.5,331 183,331 183,309 158,309 158,275 102,275 102,299.5 68.5,299.5', 4));
        svg.appendChild(createPolygon(svg, '246.5,331 361,331 361,309 336,309 336,275 280,275 280,299.5 246.5,299.5', 5));
        svg.appendChild(createPolygon(svg, '411.5,331 527,331 527,309 502,309 502,275 445.5,275 445.4,299.5 411.5,299.5', 6));
        svg.appendChild(createPolygon(svg, '68,176 182,176 182,154 158,154 158,120 101,120 101,144.5 68,144.5', 7));
        svg.appendChild(createPolygon(svg, '246.5,176 361,176 361,154 336,154 336,120 280,120 280,144.5 246.5,144.5', 8));
        svg.appendChild(createPolygon(svg, '411.5,176 527,176 527,154 502,154 502,120 445.5,120 445.4,144.5 411.5,144.5', 9));
    }
    return svg;
}

function createPolygon(svg, points, id) {
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.id = svg.id + '_' + id;
    polygon.setAttribute('onclick', 'sendData(event)');
    polygon.setAttribute('class', 'square');
    polygon.setAttribute('points', points)
    return polygon;
}

function createStyle(parent) {
    if (parent.tagName !== 'polygon') {
        if (listParent.length === 0) {
            parent.style.fill = "black";
            listParent.push(parent);
        } else {
            listParent[0].style.fill = "";
            let id = listParent[0].id;
            listParent.splice(0, 1);

            if (listTable.length !== 0) {
                listTable[0].remove();
            }
            if (id !== parent.id) {
                parent.style.fill = "black";
                listParent.push(parent);
            }
        }
    } else {
        if (listParentPol.length === 0) {
            parent.style.fill = "black";
            listParentPol.push(parent);
        } else {
            listParentPol[0].style.fill = "";
            let id = listParentPol[0].id;
            listParentPol.splice(0, 1);
            if (id !== parent.id) {
                parent.style.fill = "black";
                listParentPol.push(parent);
            }
        }
    }
}
/*
избежание дублирования
 */
function addSvgInDiv(div, svg) {
    if (listSvg.length === 1) {
        let idSvg = listSvg[0].id;
        if (idSvg === svg.id) {
            listSvg[0].remove();
            listSvg.splice(0, 1);
        } else {
            listSvg[0].remove();
            listSvg.splice(0, 1);
            listSvg.push(svg);
            div.appendChild(svg);
        }
    } else {
        listSvg.push(svg);
        div.appendChild(svg);
    }
}

/*
Установка главного названия стеллажа
 */
function createMainText(id,x,y) {
    let text = document.createElementNS('http://www.w3.org/2000/svg', "text");
    text.setAttribute('class', 'colorFont');
    text.textContent = 'Стеллаж: ' + id;
    text.setAttribute('x', x)
    text.setAttribute('y', y);
    text.setAttribute('font-size', '36')
    return text;
}
/*
установка номера полки
 */
function createText(position, x, y) {
    let text = document.createElementNS('http://www.w3.org/2000/svg', "text");
    text.setAttribute('class', 'colorFont');
    text.textContent = position;
    text.setAttribute('x', x)
    text.setAttribute('y', y);
    text.setAttribute('font-size', '36')
    return text;
}