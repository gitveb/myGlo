let title = 'project';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10;
let rollback = 50;
let fullPrice = 200000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(screenPrice + ' рублей');
console.log(fullPrice + ' рублей');

console.log(screens.toLocaleLowerCase().split(', '));

console.log(fullPrice * (rollback/100))
