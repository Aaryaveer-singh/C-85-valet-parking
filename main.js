//Create a reference for canvas 
canvas=document.getElementById("mycanvas");
pen=canvas.getContext("2d");

//Give specific height and width to the car image

green_width= 75;
green_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

green_x= 5;
green_y= 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgtag=new Image();
	background_imgtag.onload=uploadBackground;
	background_imgtag.src=background_image;

	greencar_imgtag=new Image();
	greencar_imgtag.onload=uploadgreencar;
	greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
pen.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
pen.drawImage(greencar_imgtag,green_x,green_y,green_width,green_height);
	
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
	if(green_y>=0){
green_y-=10;
uploadBackground();
uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
if(green_y<300){
green_y+=10;
uploadBackground();
uploadgreencar();
}
}

function left()
{
	//Define function to move the car left side
	if(green_x>=0){
		green_x-=10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(green_x<=700){
       green_x+=10;
       uploadBackground();
	   uploadgreencar();
	}
}
