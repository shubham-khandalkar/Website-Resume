// initialization
var canvas = document.getElementById("canvas");
var home = document.getElementById("home");
function resetCanvas() {
	home.height = window.innerHeight; 
   
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#252934";
	ctx.fill();
}

resetCanvas();
