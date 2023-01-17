console.log("init");

import { drawGame } from "./game/draw-game.js";

import { entityList } from "./game/entity-list.js"
import { playerEntity } from "./game/player-manager.js"

drawGame();

(function () {
	var callback = function() { 
		let randNum = Math.random();

		if (randNum < 0.25) {
			playerEntity.posX++;
		}
		else if (randNum < 0.5) {
			playerEntity.posX--;
		}
		else if (randNum < 0.75) {
			playerEntity.posY++;
		}
		else if (randNum < 1) {
			playerEntity.posY--;
		}

		drawGame();
	};

	callback();
	window.setInterval(callback, 1000);
})()