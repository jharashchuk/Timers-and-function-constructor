// Задание 3! Функция-конструктор.
// - Напишем функцию-конструктор, содержащую три метода:
// 1. Принимает массив, и возвращает количество элементов этого массива.
// 2. Принимает массив строк, выводит новый массив, содержащий количество символов каждой строки.
// Прим на входе [“пирамида”, “юг”, “параллелограмм”] на выходе [8, 2, 14]
// 3. Принимает массив строк, выводит их в виде строки, разделенной запятыми.

function Array(arr) {
    this.arr = arr;

    this.getLength = function() {
        return this.arr.length;
    };

    this.getSum = function() {
        return this.arr.map(item => item.length);
    };

    this.getStr = function() {
        return this.arr.join(',');
    };
}

let arr1 = new Array([1, 5, 77]);
console.log(arr1.getLength());

let arr2 = new Array(["пирамида", "юг", "параллелограмм"]);
console.log(arr2.getSum());
console.log(arr2.getStr());
