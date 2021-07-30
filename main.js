//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
var green_car_height=100;
var green_car_width=75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var background_imgTag;
var Green_car_imgTag;

//Set initial position for a car image.
var green_car_x=5;
var green_car_y=225

function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image();
	background_imgTag.onload = uploadBackground
	background_imgTag.src= background_image

	Green_car_imgTag= new Image();
	Green_car_imgTag.onload = uploadgreencar
	Green_car_imgTag.src= greencar_image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(Green_car_imgTag,green_car_x,green_car_y,green_car_width, green_car_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(green_car_y >=0){
		green_car_y=green_car_y-10;
		console.log("when up arrow is pressed x= "+green_car_x+"|y="+green_car_y)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(green_car_y <=500){
		green_car_y=green_car_y+10;
		console.log("when down arrow is pressed x= "+green_car_x+"|y="+green_car_y)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(green_car_x >=0){
		green_car_x=green_car_x-10;
		console.log("when up arrow is pressed x= "+green_car_x+"|y="+green_car_y)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(green_car_x <=525){
		green_car_x=green_car_x+10;
		console.log("when up arrow is pressed x= "+green_car_x+"|y="+green_car_y)
		uploadBackground();
		uploadgreencar();
	}
}
