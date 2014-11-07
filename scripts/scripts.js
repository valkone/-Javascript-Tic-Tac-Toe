function winnerCheck() {
	var movesCount = document.getElementById("movesCount").innerHTML;
	if(movesCount>=5){
		var r1c1 = document.getElementById("r1c1").innerHTML;
		var r1c2 = document.getElementById("r1c2").innerHTML;
		var r1c3 = document.getElementById("r1c3").innerHTML;
		var r2c1 = document.getElementById("r2c1").innerHTML;
		var r2c2 = document.getElementById("r2c2").innerHTML;
		var r2c3 = document.getElementById("r2c3").innerHTML;
		var r3c1 = document.getElementById("r3c1").innerHTML;
		var r3c2 = document.getElementById("r3c2").innerHTML;
		var r3c3 = document.getElementById("r3c3").innerHTML;
		var movesCount = document.getElementById("movesCount").innerHTML;
		var winner = "";
		
		if(r1c1==r1c2 && r1c2==r1c3 && r1c1!='<div class="empty"></div>'){ //check first row
			document.getElementById("r1c1").style.background = "#356006";
			document.getElementById("r1c2").style.background = "#356006";
			document.getElementById("r1c3").style.background = "#356006";
			winner = "true";
		}
		else if(r2c1==r2c2 && r2c2==r2c3 && r2c1!='<div class="empty"></div>') { //check second row
			document.getElementById("r2c1").style.background = "#356006";
			document.getElementById("r2c2").style.background = "#356006";
			document.getElementById("r2c3").style.background = "#356006";
			winner = "true";
		}
		else if(r3c1==r3c2 && r3c2==r3c3 && r3c1!='<div class="empty"></div>') { //check third row
			document.getElementById("r3c1").style.background = "#356006";
			document.getElementById("r3c2").style.background = "#356006";
			document.getElementById("r3c3").style.background = "#356006";
			winner = "true";
		}
		else if(r1c1==r2c1 && r2c1==r3c1 && r1c1!='<div class="empty"></div>') { //check first col
			document.getElementById("r1c1").style.background = "#356006";
			document.getElementById("r2c1").style.background = "#356006";
			document.getElementById("r3c1").style.background = "#356006";
			winner = "true";
		}
		else if(r1c2==r2c2 && r2c2==r3c2 && r1c2!='<div class="empty"></div>') { //check second col
			document.getElementById("r1c2").style.background = "#356006";
			document.getElementById("r2c2").style.background = "#356006";
			document.getElementById("r3c2").style.background = "#356006";
			winner = "true";
		}
		else if(r1c3==r2c3 && r2c3==r3c3 && r1c3!='<div class="empty"></div>') { //check third col
			document.getElementById("r1c3").style.background = "#356006";
			document.getElementById("r2c3").style.background = "#356006";
			document.getElementById("r3c3").style.background = "#356006";
			winner = "true";
		}
		else if(r1c1==r2c2 && r2c2==r3c3 && r1c1!='<div class="empty"></div>') { //check first diagonal
			document.getElementById("r1c1").style.background = "#356006";
			document.getElementById("r2c2").style.background = "#356006";
			document.getElementById("r3c3").style.background = "#356006";
			winner = "true";
		}
		else if(r1c3==r2c2 && r2c2==r3c1 && r1c3!='<div class="empty"></div>') { // check second diagonal
			document.getElementById("r1c3").style.background = "#356006";
			document.getElementById("r2c2").style.background = "#356006";
			document.getElementById("r3c1").style.background = "#356006";
			winner = "true";
		}
		else if(movesCount==9){
			winner = "false";
		}
		
		if(winner=="true"){
			var winner = document.getElementById("lastPlayer").innerHTML;
			var moves = document.getElementById("movesCount").innerHTML;
			document.getElementById("gameOver").innerHTML = "yes";
			document.getElementById("newGame").style.display = "block";
			alert('Winner: '+winner+' - Moves: '+moves);
		}
		else if(winner=="false"){
			document.getElementById("gameOver").innerHTML = "yes";
			document.getElementById("newGame").style.display = "block";
			alert('No winner!');
		}
	}
}

function clicked(position) {
	var isGameOver = document.getElementById("gameOver").innerHTML;
	if(isGameOver=="yes"){ //check if the game is over
		return;
	}
	var lastPlayer = document.getElementById("lastPlayer").innerHTML;
	if(lastPlayer == "o") {
		var getDivContent = document.getElementById(position).innerHTML;
		document.getElementById("playerNow").innerHTML = "<b>o</b>'s move";
		if(getDivContent=='<div class="empty"></div>') {
			document.getElementById(position).innerHTML = "<div class='x'></div>";
			document.getElementById("lastPlayer").innerHTML = "x";
			document.getElementById("movesCount").innerHTML = parseInt(document.getElementById("movesCount").innerHTML)+1;
			winnerCheck();
		}
	}
	else if (lastPlayer == "x"){
		var getDivContent = document.getElementById(position).innerHTML;
		document.getElementById("playerNow").innerHTML = "<b>x</b>'s move";
		if(getDivContent=='<div class="empty"></div>') {
			document.getElementById(position).innerHTML = "<div class='o'></div>";
			document.getElementById("lastPlayer").innerHTML = "o";
			document.getElementById("movesCount").innerHTML = parseInt(document.getElementById("movesCount").innerHTML)+1;
			winnerCheck();
		}
	}
}