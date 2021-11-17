
// Смена цвета текста
i = 0;
dt = new Array("#FF0000", "#FFFFFF", "#FFFF00", "#ADFF2F", "#00FFFF");
function next_cl() {
 i++;
 document.getElementById("text_cl").style.color = dt[i];
 if (i>dt.length) i = 0;
 setTimeout("next_cl()", 700);
}
next_cl();


// Изменение текста
function changetext()
{
    var jsvisible = document.querySelector('.jsvisible')
    jsvisible.innerHTML = 'Джейсон Стетхем';
}


