'use strict'

let title = prompt ("Как называется ваш проект?");
console.log(title);

let screens = prompt ("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
console.log(screens);

let screenPrice = +prompt ("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice);

let rollback = 50;

let service1 = prompt ("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt ("Сколько это будет стоить");
let service2 = prompt ("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice2 = +prompt ("Сколько это будет стоить");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let adaptive = confirm ("Нужен ли адаптив на сайте?");
console.log(adaptive);

let servicePercentPrice = fullPrice - rollback/100;
console.log(Math.ceil(servicePercentPrice));

switch (true) {
	case fullPrice >= 30000:
		console.log("Даем скидку в 10%");
		break
	case fullPrice >= 15000 && fullPrice < 30000:
		console.log("Даем скидку в 5%");
		break
	case fullPrice < 15000 && fullPrice > 0:
		console.log("Скидка не предусмотрена");
		break
	case fullPrice <= 0:
		console.log("Что то пошло не так");	
}


