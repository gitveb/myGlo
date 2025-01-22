function game() {

	let number = +prompt ("Угадай число от 1 до 100", "");

	function askNumber(index) {
		if (index > 50) {
			alert("Загаданное число меньше")
			game(number)
		}else if (index < 50 && index > 0) {
			alert("Загаданное число больше")	
			game(number)
		}else if (isNaN(index)) {
			alert("Введи число!")
			game(number)
		}	else if (!index) {
			alert("Игра окончена")
		}else if (index === 50) {
			alert("Поздравляю, Вы угадали!!!")
		} 
	}
	askNumber(number)
}

game()








// const query = function() {
// 	+prompt ("Загадывание случайного числа от 1 до 100", "")
// }
// let query = +prompt ("Угадай число от 1 до 100", "");


// const game = function(index) {

// 	if (index > 50) {
// 		alert("Загаданное число меньше")
// 	}	else if (index < 50 && index > 0) {
// 		alert("Загаданное число больше")	
// 	}	else if (isNaN(index)) {
// 		alert("Введи число!")
// 	} 	else if (!index) {
// 		alert("Игра окончена")
// 	} else if (index === 50) {
// 		alert("Поздравляю, Вы угадали!!!")
// 	} 
	
// }


// game(query)


	
// 	if (index > 50) {
// 		alert("Загаданное число меньше")
// 	} else if (index < 50) {
// 		alert("Загаданное число больше")	
// 	} else if (index !== Number) {
// 		alert("Введи число!")
// 	} else if (index === null) {
// 		alert("Игра окончена")
// 	} else if (index === 50) {
// 		alert("Поздравляю, Вы угадали!!!")
// 	}
		
// }

// switch (true) {
		// 	case a > 50:
		// 		alert("Загаданное число меньше")
		// 		break
		// 	case a < 50:
		// 		alert("Загаданное число больше")
		// 		break
		// 	case a !== Number:
		// 		alert("Введи число!")
		// 		break
		// 	case a === null:
		// 		alert("Игра окончена")
		// 		break
		// 	case a === 50:
		// 	alert("Поздравляю, Вы угадали!!!")		
		// 	break		
		// }

	// if (a > 100) {
	// 	return alert("Загаданное число меньше")
	// } else if (a < 1) {
	// 	return alert("Загаданное число больше")
	// } else if (a !== NaN) {
	// 	return alert("Введи число!")
	// } else if (a === null) {
	// 	return alert ("Игра окончена")
	// } else if (a === 50) {
	// 	return alert("Поздравляю, Вы угадали!!!")
	// }
	
	