// let a = +prompt ("Загадывание случайного числа от 1 до 100", "")

const game = function() {
	let a = +prompt ("Загадывание случайного числа от 1 до 100", "")
		switch (true) {
			case a > 50:
				alert("Загаданное число меньше")
				break
			case a < 50:
				alert("Загаданное число больше")
				break
			case a !== :
				alert("Введи число!")
				break
			case a === null:
				alert("Игра окончена")
				break
			case a === 50:
			alert("Поздравляю, Вы угадали!!!")		
			break		
		}

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
	console.log(a)
	
}

game()