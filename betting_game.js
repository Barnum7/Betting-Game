var bank = 100


// var answer = 10
// 
function compare() {
	 bet = parseInt(prompt("Place a bet between $5 and $10"));
	 guess = parseInt(prompt("Pick a number between 1 and 10"));
	 answer = Math.floor(Math.random() * 10 + 1);
	if(guess === answer) {
		bank += (bet * 2);
	}
	else if(guess === answer+1 || guess === answer-1) {
	}
	else {
		bank -= bet; 
	}
	window.alert(answer);
}

while (bank > 0) {
	compare();
	console.log(bank);	
}

