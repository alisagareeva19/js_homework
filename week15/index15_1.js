function calcSum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let otvet;
    otvet = Number(num1) + Number(num2);
    document.getElementById('otvet').value = otvet;
}
function calcSub() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let otvet;
    otvet = Number(num1) - Number(num2);
    document.getElementById('otvet').value = otvet;
}

function calcMult() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let otvet;
    otvet = Number(num1) * Number(num2);
    // console.log(otvet)
    document.getElementById('otvet').value = otvet;
}
function calcDiv() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num2 == 0) {
        alert("Делить на ноль нельзя!");
    }
    else {
    let otvet;
    otvet = Number(num1) / Number(num2);
    document.getElementById('otvet').value = otvet;
    }
}