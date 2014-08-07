/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY, startImageId) {
	var x = startX,
		y = startY,
		id,
		moveAmount = 2,
		imageId = startImageId; 
		
	var image = new Image();
	image.src = "images/"+imageId+".png";

	var text = "";
	
	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var getText = function() {
		return text;
	};

	var getImageId = function() {
		return imageId;
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};

	var setText = function(newText) {
		text = newText;
	}

	// Update player position
	var update = function(keys) {
		// Previous position
		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};

		return (prevX != x || prevY != y) ? true : false;
	};

	// Draw player
	var draw = function(ctx) {
    	ctx.drawImage(image, x, y);
    	ctx.fillText(text, x+30, y-10);
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getText: getText,
		getImageId: getImageId,
		setX: setX,
		setY: setY,
		setText: setText,
		update: update,
		draw: draw
	}
};