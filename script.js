 class TickTacToe {
	constructor(move, array) {
		this.move = move;
		this.array = array;
		this.match = [
			['00','01','02'],
			
			['00','10','20'],

			['00','11','22'],
			
			['10','11','22'],
			
			['20','21','22'],
			
			['01','11','21'],
			
			['02','12','22'],
			
			['02','11','20']
		];
	}

	setNextMove(x) {
		this.move = x;
	}

	getLastMove() {
		return this.move;
	}

	setPosition(row, column) {
		if(!this.array[row]) 
			this.array[row] = [];

 		this.array[row][column] = this.move;  
	}

	getPositions() {
		return this.array;
	}

	getResult() {

	}
}

const game = document.querySelector('#game');

const obj = new TickTacToe('',[]);

const play = (e) => {
	let td = e.target;
	let row = td.parentElement.getAttribute("data-id");
	let column = td.getAttribute("data-id");

	let lastMove = obj.getLastMove();
	
	if(td.textContent === '' ) {
	switch(lastMove) {
		case 'X':
			
			td.textContent = 'O';
			break;
		case 'O':
			td.textContent = 'X';
			break;
		default: 
			td.textContent = 'X';
	}

	obj.setNextMove(td.textContent);
	obj.setPosition(row, column);
	let pos = obj.getPositions();
	let xs = [];
	for(let i = 0; i <pos.length; i++) {
		for(let j = 0; (pos[i] && j < pos[i].length); j++) {
			if(pos[i][j] === 'X') {
				xs.push(i + '' + j);
			}
		}
	}

	let os = [];
	for(let i = 0; i <pos.length; i++) {
		for(let j = 0; (pos[i] && j < pos[i].length); j++) {
			if(pos[i][j] === 'O') {
				os.push(i + '' + j);
			}
		}
	}
	
	//Validate Step

	let matchX = false;
	let matchO = false;
	let finalResult = obj.match;
	for(let k = 0; k< finalResult.length; k++ ) {
		debugger;
	let t = false;
		let splice = xs.slice(xs.indexOf(finalResult[k][0]));
		for(let i = 0; i < finalResult[k].length; i++) {
			if(finalResult[k][i] === splice[i]) {
				t = true;
			} else {
				t = false;
			}

		}

		matchX = t;
		if(matchX)
			break;
	}

	for(let k = 0; k< finalResult.length; k++ ) {
		debugger;
	let t = false;
		let splice = os.slice(os.indexOf(finalResult[k][0]));
		for(let i = 0; i < finalResult[k].length; i++) {
			if(finalResult[k][i] === splice[i]) {
				t = true;
			} else {
				t = false;
			}

		}

		matchO = t;
		if(matchO)
			break;
	}
	
	if(matchO) {
		alert('You won MR O');
	}

	}
}

game.addEventListener('click',  play);
