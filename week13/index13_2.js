function calcSum() {
    let x = prompt('Введите первое слагаемое:', '');
    let y = prompt('Введите второе слагаемое:', '');
    alert("Результат сложения: " + (Number(x) + Number(y)));
}

function calcSub() {
    let x = prompt('Введите уменьшаемое:', '');
    let y = prompt('Введите вычитаемое:', '');
    alert("Результат вычитания: " + (Number(x) - Number(y)));
}
function calcMult() {
    let x = prompt('Введите первый множитель:', '');
    let y = prompt('Введите второй множитель:', '');
    alert("Результат умножения: " + (Number(x) * Number(y)));
}

function calcDiv() {
    let x = prompt('Введите делимое:', '');
    let y = prompt('Введите делитель:', '');
    alert("Результат деления: " + (Number(x) / Number(y)));
}
