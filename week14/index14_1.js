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
    document.getElementById('otvet').value = otvet;
}
function calcDiv() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let otvet;
    otvet = Number(num1) / Number(num2);
    document.getElementById('otvet').value = otvet;
}