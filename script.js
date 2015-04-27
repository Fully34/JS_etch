$(document).ready(function(){

//DEFAULT TABLE
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
for (var i = 0; i< 16; i++){
	for (var x=0; x < 16; x++){
		$('.container').append($('<div></div>').addClass('square').css({"width": 20, "height": 20}))
		.css({"width": 20*16, "height": 20*16}); //--> need to use this to add apropriate amount of <div>'s to container <div>
	}
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//DEFAULT TABLE ACTIONS
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
$('.square').on('mouseenter', function (){
	$(this).css('background-color', '#f0f0f0');
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//WHAT TO DO WHEN THE BUTTON IS PRESSED
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
	$('button').on('click', function (){
		
		$('.container').empty(); //--> EMPTY CURRENT GRID

		//FUNCTION TO VERIFY IF USER INPUT IS AN INTEGER
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		var isInt = function(num){
			if(+num===parseInt(num)) {
				return true
			}else{
				return false
			}
		};
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		
		//DECLARE SCALE
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		var scale = prompt('How large would you like your squares (in pixels, up to 15)?')
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

		//CHECK SCALE
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		if (scale > 25) {
			alert('That number needs to be smaller!  I\'m going to be so slow!');
		}else if(isInt(scale)!==true){
			alert('I need an integer!')
		};
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

		//DECLARE OTHER VARIABLES
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		var grid = prompt('What size would you like your grid?');
		var container = $('.container');
		var container_width = grid*scale//--> Maintains grid integrity
		var container_height = grid *scale //--> Maintains grid integrity
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		
		//CHECK GRID
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
		if (grid > 100) {
			alert('That number needs to be smaller!');
		}else if(isInt(grid)!==true){
			alert('Stop wasting everybody\'s time!')
		}else if(grid>100){
			alert('Stop wasting everybody\'s time!')			
		}else if(isInt(grid)===true&&grid<=100){
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

		//ITERATE GRID
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
			for (var i = 0; i< grid; i++){
				for (var x=0; x < grid; x++){
				container.append($('<div></div>').addClass('square').css({"width": scale, "height": scale}))
				.css({"width": container_width, "height": container_height}); //--> need to use this to add apropriate amount of <div>'s to container <div>
				}
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

		//GRID ACTIONS
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
				$('.square').on('mouseenter', function (){
					$(this).css('background-color', '#f0f0f0');
				});
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
			}
		}; //--> ends if
	}); //--> ends function
});	//--> ends javascript