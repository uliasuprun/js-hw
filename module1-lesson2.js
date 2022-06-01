// ******* SWITCH *******


// %%%%%%% ZADACHA 1 %%%%%%%

// const stars = 8;
// let price;

// // if (stars === 1) {
// //     price = 20;
// // } else if (stars === 2) {
// //     price = 30;
// // } else if (stars === 3) {
// //     price = 50;
// // } else if (stars === 4) {
// //     price = 70;
// // } else if (stars === 5) {
// //     price = 120;
// // } else {
// //     console.log('Такого кол-ва звезд нет');
// // }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default: 
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// %%%%%%% ZADACHA 2 %%%%%%%

// const stars = 5;
// let price;

// // if (stars === 1 || stars === 2) {
// //     price = 20;
// // } else if (stars === 3 || stars === 4) {
// //     price = 30;
// // } else if (stars === 5) {
// //     price = 120;
// // } else {
// //     console.log('Такого кол-ва звезд нет');
// // }

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// %%%%%%% ZADACHA 3 %%%%%%%

// const option = 3;
// let message = '';

// switch(option) {
//     case 1: 
//     message = 'Забрать товар в офисе';
//     break;

//     case 2: 
//     message = 'Курьер доставит завтра';
//     break;

//     case 3: 
//     message = 'Посылка будет отправлена сегодня';
//     break;

//     default: 
//     message = 'Вам перезвонит менеджер';
// }

// console.log(message);










// ******* FOR *******

// %%%%%%% ZADACHA 4 %%%%%%%

// // for (инициализация; условие; пост - выражение) {
// //     //тело цикла
// // }

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// // и так можно:

// for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
// }

// // и так можно:

// for (let i = 6; i >= 1; i -= 2) {
//     console.log(i);
// }

// console.log();




// %%%%%%% ZADACHA 5 %%%%%%%

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i < 5; i += 1) {
//     const salary = Math.round (
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );
//     console.log(`ЗП работника номер ${i} - ${salary}`)

//     totalSalary += salary;
// }

// console.log('totalSalary:', totalSalary);


// %%%%%%% ZADACHA 6 %%%%%%%

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         // console.log(`Нечетное: `, i);
//         continue;
//     }

//     console.log(`Четное: `, i);
//     total += i;

//     //total = total + i; более простая запись - total += i;
// }

// console.log(`total: `, total)


// %%%%%%% ZADACHA 7 %%%%%%%

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоиммость заказа ${payment} кредитов.`);

// if(payment <= balance) {
//     console.log(`ok`);

//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log(`Не хватает средств на счету`);
// }

// console.log(`Операция завершена`);


// %%%%%%% ZADACHA 8 %%%%%%%


// let totalSpent = 500;
// let payment = 200;
// let discount = 0;

// if (totalSpent < 100) {
//     console.log('NO партнер, скидка 0%');
//     discount = 0;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000){
//     console.log('Серебрянный партнер, скидка 5%'); 
//     discount = 0.05;
// } else {
//     console.log('Золотой партнер, скидка 10%'); 
//     discount = 0.1;
// }

// payment -=payment * discount;

// console.log(`Заказ на сумму ${payment} кредитов, скидка ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченная в магазине ${totalSpent} кредитов`);


