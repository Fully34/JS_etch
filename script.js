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

	//===============================================================//
	// VARIABLE DECLARATIONS

	var grid = prompt('What size would you like your grid?');
	var container = $('.container');
	// var container_width = 
	// var container_height =

	//VERIFY grid VARIABLE
		// console.log(grid);
		// console.log(isInt(grid));

	//===============================================================//
	//VERIFICATION THAT 'grid' IS AN INTEGER

	if (grid > 100) {
		alert('That number needs to be smaller!');
	}else if(isInt(grid)===true){
		alert('Grid of ' + grid + 'x' + grid + ' incoming!');
		// console.log(isInt(grid)); --> VERIFICATION OF GRID VARIABLE (WHETHER OR NOT IT'S AN INT)
	}else if(isInt(grid)!==true){
		alert('I need an integer!')
		//console.log(isInt(grid)); --> VERIFICATION OF GRID VARIABLE (WHETHER OR NOT IT'S AN INT)
	};

	//===============================================================//
	//Iterate grid

		// function gen_divs(grid){
		for (var i = 0; i< grid; i++){
			for (var x=0; x < grid; x++){
			container.append($('<div></div>').addClass('square').css({"width": 20, "height": 20}))
			.css({"width": (grid*grid), "height": (grid*grid)}); //--> need to use this to add apropriate amount of <div>'s to container <div>
			}
		}

	//===============================================================//
	//HOVER ACTION

		$('.square').on('mouseenter', function (){
			$(this).css('background-color', '#c9eac6');
		});
	// }

	//===============================================================//

});	