/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY, startImageId) {
	var x = startX,
		y = startY,
		imageId = startImageId,
		id;

	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
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

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getImageId: getImageId,
		setX: setX,
		setY: setY,
		id: id
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.Player = Player;