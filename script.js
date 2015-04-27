$(document).ready(function(){

	var isInt = function(num){
		if(+num===parseInt(num)) {
			return true
		}else{
			return false
		}
	};

	//VERIFY isInt FUNCTION
		// console.log(isInt('3'));
		// console.log(isInt(3));
		// console.log(isInt('hello'));

	var grid = prompt('What size would you like your grid?');

	//VERIFY grid VARIABLE
		// console.log(grid);
		// console.log(isInt(grid));

	if (grid > 30) {
		alert('That number needs to be smaller!');
	}else if(isInt(grid)===true){
		alert('Grid of ' + grid + 'x' + grid + ' incoming!');
		// console.log(isInt(grid)); --> VERIFICATION OF GRID VARIABLE (WHETHER OR NOT IT'S AN INT)
	}else if(isInt(grid)!==true){
		alert('I need an integer!')
		//console.log(isInt(grid)); --> VERIFICATION OF GRID VARIABLE (WHETHER OR NOT IT'S AN INT)
	};


	$('.container').append('<div class="square"></div>');



});