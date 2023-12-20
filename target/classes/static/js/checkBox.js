let checkBox = document.getElementById('check4');
checkBox.addEventListener('click',()=>{
    if (checkBox.checked) {
        document.getElementById('select1').style.display = 'block';
    } else {
        document.getElementById('select1').style.display = 'none';

    }
})
