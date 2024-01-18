let listNumbersRandom = [];
const numberLimit = 10;
let numberSecret = numberRandom();
let trys = 1;
let resultTries = "";

function showTextInScreen(tag, text) {
	field = document.querySelector(tag);
	field.innerHTML = text;

	// api voice 
	responsiveVoice.speak(text, 'US English Female', { rate: 1.2 })
}

function initialMessage() {
	showTextInScreen('h1', 'Game number secret');
	showTextInScreen('p', 'Choose a number between 1 and 10');
}

initialMessage();

function numberRandom() {
	// return parseInt(Math.random() * 10 + 1);
	let numberChoose = parseInt(Math.random() * numberLimit + 1);

	// create quantity of number in list
	let quantityNumbers = listNumbersRandom.length;

	// list larger than 10 numbers him should reset
	if (quantityNumbers == numberLimit) {
		listNumbersRandom = [];
	}

	// verify if the number is in the list
	if (listNumbersRandom.includes(numberChoose)) {
		return numberRandom();
		// console.log(numberChoose);
	} else {
		listNumbersRandom.push(numberChoose);
		// console.log(numberChoose)
		return numberChoose;
	}
}

function verifyKick() {
	let kick = document.querySelector('input').value;
	// console.log(kick == numberSecret);

	if (kick == numberSecret) {
		let resultTries = trys > 1 ? 'tries' : 'try';
		showTextInScreen('h1', `Congratulations, you got it right! with ${trys} ${resultTries}`);
		document.getElementById('reiniciar').removeAttribute('disabled');

	} else {
		showTextInScreen('h1', `Sorry, you didn't get it right`);
		// console.log(numberSecret);

		if (kick > numberSecret) {
			showTextInScreen('p', 'the numberSecret is smaller than the kick');
		} else {
			showTextInScreen('p', 'the numberSecret is larger than the kick');
		}
	}
	trys++;
	clean();
}

function clean() {
	field = document.querySelector('input');
	field.value = '';
}

function reiniciar() {
	numberSecret = numberRandom();
	trys = 1;
	clean();
	initialMessage();
	document.getElementById('reiniciar').setAttribute('disabled', true);
}

