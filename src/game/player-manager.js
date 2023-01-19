import { entityList } from "./entity-list.js"
import { Player } from "../entities/player.js"
import { drawGame } from "./draw-game.js";
import { doGameTick } from "../main.js";

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
		let playerMoved = false;

		if (keyEvent.key == "w") {
			playerMoved = playerEntity.attemptMove(0, -1);
		}
		else if (keyEvent.key == "s") {
			playerMoved = playerEntity.attemptMove(0, 1);
		}
		else if (keyEvent.key == "a") {
			playerMoved = playerEntity.attemptMove(-1, 0);
		}
		else if (keyEvent.key == "d") {
			playerMoved = playerEntity.attemptMove(1, 0);
		}

		if (playerMoved) {
			console.log(`player moved with key ${keyEvent.key}`);
			doGameTick();
			drawGame();
		}
	}
};