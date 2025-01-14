'use strict'

let title = prompt ("Как называется ваш проект?");
let screens = prompt ("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt ("Сколько будет стоить данная работа?", "12000");
let rollback = 50;
let service1 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt ("Сколько это будет стоить");
let service2 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt ("Сколько это будет стоить");
let adaptive = confirm ("Нужен ли адаптив на сайте?");
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function() {
	return servicePrice1 + servicePrice2;
	
}

function getFullPrice() {
	return screenPrice + allServicePrices;
}
// не понимаю как сделать остальные буквы в нижнем регистре toLocaleUpperCase()
const getTitle = function() {
	return title.trim().toUpperCase()
}

function getServicePercentPrices() {
	return Math.ceil(fullPrice - (fullPrice * (rollback/100)));
}

const showTypeOf = function(variable) {
	console.log(variable, typeof variable);
}
let getRollBackMassage = function () {
	if (fullPrice >= 30000) {
		return "Даем скидку в 10%";
	} else if (fullPrice >= 15000 && fullPrice < 30000) {
		return "Даем скидку в 5%";
	} else if (fullPrice < 15000 && fullPrice >= 0) {
		return "Скидка не предусмотрена";
	} else {
		return "Что-то пошло не так";
	}
}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getAllServicePrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollBackMassage(fullPrice));
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(service1);
console.log(service1);
console.log(fullPrice);
console.log(adaptive);
console.log(servicePercentPrice);
