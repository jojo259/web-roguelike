import { entityList } from "./entity-list.js"
import { Player } from "../entities/alive/player.js"
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
		let playerCompletedAction = false;

		switch (keyEvent.key) {
			case "w":
				playerCompletedAction = playerEntity.attemptMove(0, -1);
				break;
			case "a":
				playerCompletedAction = playerEntity.attemptMove(-1, 0);
				break;
			case "s":
				playerCompletedAction = playerEntity.attemptMove(0, 1);
				break;
			case "d":
				playerCompletedAction = playerEntity.attemptMove(1, 0);
				break;
		}

		if (playerCompletedAction) {
			console.log(`player moved with key ${keyEvent.key}`);
			doGameTick();
		}
	}
};