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

	//SCALE MODIFIER
	var scale = prompt('How large would you like your squares (in pixels, up to 30)?')

		//===============================================================//
		//VERIFY THAT SCALE IS AN INTEGER < 30
		if (scale > 30) {
			alert('That number needs to be smaller!');
		}else if(isInt(scale)===true){
			alert('your squares will be: ' + scale + 'x' + scale);
			// console.log(isInt(scale)); --> VERIFICATION OF scale VARIABLE (WHETHER OR NOT IT'S AN INT)
		}else if(isInt(scale)!==true){
			alert('I need an integer!')
			//console.log(isInt(scale)); --> VERIFICATION OF scale VARIABLE (WHETHER OR NOT IT'S AN INT)
		};

	var grid = prompt('What size would you like your grid?');
	var container = $('.container');
	var container_width = grid*scale
	var container_height = grid *scale

		//===============================================================//
		//VERIFICATION THAT 'grid' IS AN INTEGER

		if (grid > 100) {
			alert('That number needs to be smaller!');
		}else if(isInt(grid)===true){
		//===============================================================//
		//Iterate grid

			alert('Your grid will be ' + grid + 'x' + grid + '!');
			// console.log(isInt(grid)); --> VERIFICATION OF GRID VARIABLE (WHETHER OR NOT IT'S AN INT)
			// function gen_divs(grid){
			for (var i = 0; i< grid; i++){
				for (var x=0; x < grid; x++){
				container.append($('<div></div>').addClass('square').css({"width": scale, "height": scale}))
				.css({"width": container_width, "height": container_height}); //--> need to use this to add apropriate amount of <div>'s to container <div>
				}
			}

		//===============================================================//
		//HOVER ACTION

			$('.square').on('mouseenter', function (){
				$(this).css('background-color', '#c9eac6');
			});
		// }

		//===============================================================//
		}else if(isInt(grid)!==true){
			alert('I need an integer!')
			//console.log(isInt(grid)); --> VERIFICATION OF GRID VARIABLE (WHETHER OR NOT IT'S AN INT)
		};


	//VERIFY grid VARIABLE
		// console.log(grid);
		// console.log(isInt(grid));








});	