console.log("init");

import { Player } from "./entities/player.js";
import { Slime } from "./entities/slime.js";
import { clearCanvas } from "./game/canvas.js";

let entityList = [new Player({posX: 4, posY: 5}), new Slime({posX: 4, posY: -1, size: 15})];

function drawGame() {
	clearCanvas();
	for (let curEntity of entityList) {
		console.log(curEntity)
		curEntity.drawSprite()
	}
}

drawGame();

(function () {
    var callback = function() { 
        entityList[1].posY++;
        drawGame();
    };

    callback();

    window.setInterval(callback, 500);
})();