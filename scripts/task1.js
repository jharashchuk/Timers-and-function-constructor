// Задание 1! Создать таймер.
// - Напишем функцию, которая будет выводить в консоль любую цифру.
// - Добавим следующий функционал: каждую секунду цифра должна увеличиваться на единицу.
// - Расширим функцию таким образом, чтобы на цифре 60 таймер останавливался.
// - При остановке таймера выведем в консоль запись о том, что минута прошла.


// function showNumber(number) {
//     console.log(number);
//     let counter = 0;
    
//     const timerId = setInterval(() => {
//         number += 1;
//         console.log(number);
//         counter++;
//         if(counter == 60) {
//             console.log('minute passed');
//             clearInterval(timerId);                   
//         }
//     }, 1000);   
// }

// showNumber(10);

function timer(num) {    
    let counter = 0;

    const timerId = setTimeout(function go() {
        console.log(num);
            num += 1;
        if(counter < 60) {
            setTimeout(go, 1000);
        } else {
            console.log('minute passed');
            clearTimeout(timerId);       
        }
        counter++;
    }, 1000);    
}

timer(20);
