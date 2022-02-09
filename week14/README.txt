Ответы:

1) Function Declaration - объявление функции function;
 Function Expression - объявление функции через переменную;
 Стрелочные функции - сокращенное объявление функции =>
 
2) function func(x) {
    let y = x**2;
    return y;
}

let func = function(x){
    let y = x**2;
    return y;
}

let func = (x) => {
        let y = x**2;
        return y;
    }
    
3) Тестирование - проверяем все ли работает на самой странице (ручное; автоматизированное)
Отладка - ищем и исправляем ошибки в скрипте с помощью возможностей браузера
логирование - проверяем разные места в коде через вывод в консоль, фиксируем что происходит

4) Синтаксисом и Function Expression работает только если ее вызвать после объявления.

5) Если нужно что-то вывести в консоль из кода, применяется функция console.log

6) DOM – это представление HTML-документа в виде дерева тегов.
BOM – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа

7) 1. let agetable = document.getElementById('age-table');
2. let elems = document.getElementsByTagName('label');
3. let form = document.getElementByName('search');

8) <button id="site" onClick=ChangeSite()>Click</button>
    <script>
        function ChangeSite() {
            location.href = "https://www.youtube.com/";
        }
    </script>
    
9) document.getElementByTagName('input').value = '';

10) было:
    // function Name() {
    //     let name = prompt('Введите ваше имя:', '...');
    //     alert(`Привет, ${name}!`);
    // };

стало:
    let Name = () => {
        let name = prompt('Введите ваше имя:', '...');
        alert(`Привет, ${name}!`);
    }
    
 или можно так если указать name:
    let Name = (name) => alert(`Привет, ${name}!`);
    
