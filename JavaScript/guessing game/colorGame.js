var squares = document.querySelectorAll(".square");
var mode = 6;
var colors = [];
generateRandomColors(mode);
var goalColor = pickColor();
var RGBinTitle = document.querySelector("#title");
var winNotif = document.querySelector("#winNotif");
var headerDisplay = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")

easyBtn.addEventListener("click", function() {
	mode = 3;
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	colors.length=0;
	generateRandomColors(mode);
	goalColor = pickColor();
	RGBinTitle.innerHTML = goalColor;
	winNotif.textContent = "";
	headerDisplay.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if (!colors[i]) {
			squares[i].style.display = "none"
		}
	}
	reset();
})

hardBtn.addEventListener("click", function() {
	mode = 6;
	easyBtn.classList.remove("selected")
	hardBtn.classList.add("selected")
	colors.length=0;
	generateRandomColors(mode);
	goalColor = pickColor();
	RGBinTitle.innerHTML = goalColor;
	winNotif.textContent = "";
	headerDisplay.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block"
	}
	reset();
})

RGBinTitle.innerHTML = goalColor
reset();

resetBtn.addEventListener("click", function() {
	colors.length=0;
	generateRandomColors(mode);
	goalColor = pickColor();
	RGBinTitle.innerHTML = goalColor;
	winNotif.textContent = "";
	headerDisplay.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	reset();
})

function reset() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			if (goalColor === this.style.backgroundColor) {
				winNotif.textContent = "Congrats!"
				changeColors();
				resetBtn.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				winNotif.textContent = "Try Again!"
			}
		})
	}
}

function changeColors() {
	headerDisplay.style.backgroundColor = goalColor;
	squares.forEach(function(square) {
		square.style.backgroundColor = goalColor;
	})
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	for(var i = 0; i < num; i++) {
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
		colors.push(hue);
	}
}