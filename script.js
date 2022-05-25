// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log = true;

// const shoudRenew = confirm('hgjhjhk?');
// console.log(shoudRenew);

// console.log(Math);
// const base = 2;
// const power = 5;

// // const result = Math.pow(base, power);
// console.log(base ** power);
// console.log();

// let base = prompt ('give number');
// base = Number(base);
// console.log(base);

// let power = prompt ('give stepen');
// power = Number(power);
// console.log(power);

// const result= base ** power;
// console.log(result);

// const max = 100;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// // Change code below this line
// function add(a, b, c) {
//     // Change code below this line
// return a + b + c;

// // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage (name, price) {
//     // Change code below this line
//     const message = `You picked ${name}, price per item is ${price} credits`;
// // Change code above this line
// return message;
// };

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// function calculateTotalPrice (orderedQuantity, pricePerItem) {

// const totalPrice = a + b + c;

// return totalPrice;
// const a = (calculateTotalPrice(5, 100));
// const b = (calculateTotalPrice(8, 60));
// const c = (calculateTotalPrice(3, 400));
// const d = (calculateTotalPrice(1, 3500));
// const f = (calculateTotalPrice(12, 70));

// console.log(totalPrice);
// };

// const stars = 2;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//     price = 30;
//     break;

//     case 3:
//     case 4:
//     price = 170;
//     break;

//     default:
//     console.log('skjsefhwvs');
// }

// console.log(price);


// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
// }

// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.


// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов calculateTotalPrice(1, 3500) возвращает 3500
// Вызов calculateTotalPrice(12, 70) возвращает 840
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
// // Change code below this line
// const totalPrice = (orderedQuantity * pricePerItem);

// // Change code above this line
// return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));


// console.log(x * y); // 50

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   }; 
//   console.log(makeMessage('Radar', 6150));
//   console.log(makeMessage('Scanner', 3500));
//   console.log(makeMessage('Reactor', 8000));
//   console.log(makeMessage('Engine', 4070));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line

//     const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//     // Change code above this line
//     return message;
//   }

//   console.log(makeOrderMessage(2, 100, 50));

// function isAdult(age) {
//     // Change code below this line

//     // const a = 18;
//     // const b = "" ;
//     const passed = (18 <= age);
    
//     // Change code above this line
//     return passed;
//     }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//     Вызов isAdult(20) возвращает true
// Вызов isAdult(14) возвращает false
// Вызов isAdult(8) возвращает false
// Вызов isAdult(37) возвращает true



// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Объявлена функция isValidPassword(password)
// В выражении проверки паролей использован оператор ===
// Вызов isValidPassword("mangodab3st") возвращает false
// Вызов isValidPassword("kiwirul3z") возвращает false
// Вызов isValidPassword("jqueryismyjam") возвращает true


// function isValidPassword(password) {
// const SAVED_PASSWORD = 'jqueryismyjam';
// // Change code below this line
// const isMatch = (password === SAVED_PASSWORD);

// // Change code above this line
// return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// ***** ZADACHA 15 *****

// function checkAge(age) {
// let message;

// if (age >= 18) { // Change this line
//     message = 'You are an adult';
// } else {
//     message = 'You are a minor';
// }

// return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ***** ZADACHA 16 *****

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

// function checkStorage(available, ordered) {
// let message;
// // Change code below this line

// if (available >= ordered) {
//     message = 'Order is processed, our manager will contact you.';
// } else {
//     message = 'Not enough goods in stock!';
// }

// // Change code above this line
// return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// ***** ZADACHA 17 *****

// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// Значение переменной a равно 7
// Использован оператор +=
// Значение переменной b равно 6
// Использован оператор -=
// Значение переменной c равно 45
// Использован оператор *=
// Значение переменной d равно 2
// Использован оператор /=

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ***** ZADACHA 18 *****


// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// let message;
// // Change code below this line
// const totalPrice = (pricePerDroid * orderedQuantity);

// if (totalPrice <= customerCredits) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
// } else {
//     message = 'Insufficient funds!';
// }

// return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// ***** ZADACHA 19 *****


