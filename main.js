/*let catName;
//Проверяет вес кота
function checkWeight (catWeight , nameCat, catColor ) {
    if (catWeight <=4) {
        alert (catColor + " " + nameCat + " спортивный");
    } else if (catWeight <=8) {
        alert (catColor + " " + nameCat + " толстячок");
    } else alert (catColor + " " + nameCat + " срочно на диету");    
}

//catName = "Murka";
let weight = 3;
let colorFlur = "white";
checkWeight (weight, catName, colorFlur);

catName = "Vasya";
weight = 4;
colorFlur = "grey";
checkWeight (weight, catName, colorFlur);

catName = "Lima";
weight = 7;
colorFlur = "pink";
checkWeight (weight, catName, colorFlur);

catName = "Gav";
weight =10;
colorFlur = "black and white";
checkWeight (weight, catName, colorFlur);

//Операция, проверяющая меньшее из чисел
function checkLow (firstNumber, secondNumber) {
    let minNumber;
    //let firstNumber = +prompt ("Введите первое число");
    //let secondNumber = +prompt ("Введите второе число");
    if (firstNumber<secondNumber) {
        minNumber = firstNumber;
    } else if (firstNumber>secondNumber) {
        minNumber = secondNumber;
    } else minNumber = "Числа равны между собой";
    return minNumber;
}
//alert (checkLow (5, 8));

//возводит число в степень
function elevate (userNumber, degree) {
    return userNumber**degree;
}
alert (elevate (2, 5))*/

//калькулятор
function calculator (firstNumber, secondNumber, sign) {
   let resultNumber;
   switch (sign) {
        case "+" : resultNumber = firstNumber+secondNumber
        break;
        case "-" : resultNumber = firstNumber-secondNumber
        break;
        case "*" : resultNumber = firstNumber*secondNumber
        break;
        case "/" : resultNumber = firstNumber/secondNumber
        break;
    }
    return resultNumber;
}
//alert (calculator (2, 5,"*"));

//проверяет, является ли число простым
function checkSimple (num) {
    let i=0;
    let str;
    do {
        i++;
    } while  (num % i !=0 || i ==1);
    str = (num == i) ? `число ${num} простое` : `число ${num} сложное`;
    return str;
}
//alert (checkSimple (21));

//таблица умножения
function tableMultiplication (x) {
    document.write ('<table>');
    document.write (`<caption>Таблица умножения на ${x}</caption>`);
    for (let i=2; i<=9; i++) {
        document.write (`<tr><td>${x} x ${i}</td> <td>=</td> <td>${x*1}</td></tr>`)
    }
    document.write ('</table>');
}
for (let i=2; i<10; i++)
    tableMultiplication (i);