function onClick() {
    let input = document.querySelector('#uploadPDF');

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

    console.log("file size: " + file.files[0].size)
    let fileData = new FormData();

    fileData.set('file', file.files[0], file.files[0].name);


    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/uploadPdf', true)
    console.log(fileData)
    xhr.send(fileData);
}