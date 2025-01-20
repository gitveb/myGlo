'use strict'

const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	rollback: 50,
	adaptive: true,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',
	start: function () {
		appData.asking()
		appData.allServicePrices = appData.getAllServicePrices()
		appData.fullPrice = appData.getFullPrice()
		appData.servicePercentPrice = appData.getServicePercentPrices()
		appData.title = appData.getTitle()

		appData.logger()
	},
	isNymber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num)
	},
	
	asking: function() {
		appData.title = prompt ("Как называется ваш проект?", "Калькулятор верстки");
		appData.screens = prompt ("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
		
		do  {
			appData.screenPrice = prompt ("Сколько будет стоить данная работа?");
		} while (!appData.isNymber(appData.screenPrice))

		appData.adaptive = confirm ("Нужен ли адаптив на сайте?");
	},
	
	getAllServicePrices: function() {
		let sum = 0;

		for (let i = 0; i < 2; i++) {
			let price = 0

			if (i === 0) {
				appData.service1 = prompt ("Какой дополнительный тип услуги нужен?");
			} else if (i === 1) {
				appData.service2 = prompt ("Какой дополнительный тип услуги нужен?");
			}

			do {
				price = prompt ("Сколько это будет стоить");
			} while (!appData.isNymber(price))
			
			sum += +price
		}
		return sum		
	},
	getFullPrice: function() {
		return +appData.screenPrice + appData.allServicePrices;
	},
	getTitle: function() {
		return appData.title.trim().toUpperCase()[0] + appData.title.trim().slice(1).toLowerCase();
	},
	getServicePercentPrices: function() {
		return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
	},
	getRollBackMassage: function () {
		if (fullPrice >= 30000) {
			return "Даем скидку в 10%";
		} else if (fullPrice >= 15000 && fullPrice < 30000) {
			return "Даем скидку в 5%";
		} else if (fullPrice < 15000 && fullPrice >= 0) {
			return "Скидка не предусмотрена";
		} else {
			return "Что-то пошло не так";
		}
	},
	logger: function () {
		for (let key in appData)
			console.log(appData[key])
		// console.log(appData.fullPrice);
		// console.log(appData.servicePercentPrice);
	}
}

appData.start()







