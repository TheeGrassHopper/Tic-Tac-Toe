
	$(document).ready(function() {
		var input1 = "x";
		var input2 = "o";
		var currentPlayer = input1;

		$(".pure-u-1-3").click(function(){
			$(this).html(currentPlayer);
		

			// i need to check if there is a winner
			//we need to find out where are the X's and O's on the board to find out whos the winner 
			//testing out the commbination the palyers to see if it's a winner combo
			//if we have a winning combanation we need to declare it
			function switchplayer(){
				if ( currentPlayer == input1){
				    return (currentPlayer = input2);
				}
				else if (currentPlayer == input2){
				    return (currentPlayer = input1);
					}
				}
		
		 	function checkWinRow (){
				if( $('#a').html()=='x' && $('#b').html()=='x' && $('#c').html()=='x'){
					alert("great X Row wins!!")
					return true;

				}
				if( $('#a').html()=='o' && $('#b').html()=='o' && $('#c').html()=='o'){
					alert("great O Row wins!!")
					return true;
				}
				if( $('#d').html() =='x' && $('#e').html()=='x' && $('#f').html()=='x'){
					alert("great X Row wins!!")
					return true;

				}
				if( $('#d').html()=='o' && $('#e').html()=='o' && $('#f').html()=='o'){
					alert("great O Row wins!!")
					return true;
				}
				if( $('#g').html() =='x' && $('#h').html()=='x' && $('#i').html()=='x'){
					alert("great X Row wins!!")
					return true;
				}
				if( $('#g').html()=='o' && $('#h').html()=='o' && $('#i').html()=='o'){
					alert("great O Row wins!!")
					return true;
				}
				else {
					return false;
					}
				
				}
			function checkWinColumn (){
				if( $('#a').html()=='x' && $('#d').html()=='x' && $('#g').html()=='x'){
					alert("column X wins!!")
					return true;

				}
				if( $('#a').html()=='o' && $('#d').html()=='o' && $('#g').html()=='o'){
					alert("column O wins!!")
					return true;
				}
				if( $('#b').html()=='x' && $('#e').html()=='x' && $('#h').html()=='x'){
					alert("column X wins!!")
					return true;

				}
				if( $('#b').html()=='o' && $('#e').html()=='o' && $('#h').html()=='o'){
					alert("column O wins!!!")
					return true;
				}
				if( $('#c').html()=='x' && $('#f').html()=='x' && $('#i').html()=='x'){
					alert("column X wins!!")
					return true;

				}
				if( $('#c').html()=='o' && $('#f').html()=='o' && $('#i').html()=='o'){
					alert("column O wins!!")
					return true;
				}		
				else{
					return false;
				}
			}
			function checkWinDiagonal (){
				if( $('#a').html()=='x' && $('#e').html()=='x' && $('#i').html()=='x'){
					alert("Dioganal X wins!!")
					return true;

				}
				if( $('#a').html()=='o' && $('#e').html()=='o' && $('#i').html()=='o'){
					alert("Dioganal O wins!!")
					return true;
				}
				if( $('#c').html()=='x' && $('#e').html()=='x' && $('#g').html()=='x'){
					alert("Dioganal X wins!!")
					return true;

				}
				if( $('#c').html()=='o' && $('#e').html()=='o' && $('#g').html()=='o'){
					alert("Dioganal O wins!!")
					return true;
				}			
				else{
					return false;
				}
			}
			switchplayer();
			checkWinDiagonal();
			checkWinColumn();
			checkWinRow();
		
		});	
		
	});
