import { entityList } from "./entity-list.js"
import { Player } from "../entities/player.js"
import { drawGame } from "./draw-game.js";

export let playerEntity = null;

for (let curEntity of entityList) {
	if (curEntity instanceof Player) {
		playerEntity = curEntity;
		console.log("bazinga found player entity");
	}
}

document.onkeypress = function (keyEvent) {
	keyEvent = keyEvent || window.event;

	let movementKeys = ["w", "a", "s", "d"];

	if (movementKeys.includes(keyEvent.key)) {
		console.log(`player moved with key ${keyEvent.key}`)
		
		if (keyEvent.key == "w") {
			playerEntity.posY--;
		}
		else if (keyEvent.key == "s") {
			playerEntity.posY++;
		}
		else if (keyEvent.key == "a") {
			playerEntity.posX--;
		}
		else if (keyEvent.key == "d") {
			playerEntity.posX++;
		}

		drawGame();
	}
};