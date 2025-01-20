'use strict'

let title;
let screens;
let screenPrice;
let rollback = 50;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNymber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
	title = prompt ("Как называется ваш проект?", "Калькулятор верстки");
	screens = prompt ("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
	

	do  {
		screenPrice = prompt ("Сколько будет стоить данная работа?");
	} while (!isNymber(screenPrice))

	adaptive = confirm ("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function() {
	let sum = 0;
	for (let i = 0; i < 2; i++) {
		let price = 0

		if (i === 0) {
			service1 = prompt ("Какой дополнительный тип услуги нужен?");
		} else if (i === 1) {
			service2 = prompt ("Какой дополнительный тип услуги нужен?");
		}

		do {
			price = prompt ("Сколько это будет стоить");
		} while (!isNymber(price))
		
		sum += +price
	}
	return sum		
}

function getFullPrice() {
	return +screenPrice + allServicePrices;
}

const getTitle = function() {
	return title.trim().toUpperCase()[0] + title.trim().slice(1).toLowerCase();
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollBackMassage(fullPrice));
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(fullPrice);
console.log(adaptive);
console.log(servicePercentPrice);
