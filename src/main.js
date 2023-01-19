console.log("init");

import { drawGame } from "./game/draw-game.js";
import { entityList } from "./game/entity-list.js"
import { playerEntity } from "./game/player-manager.js"

export function doGameTick() {
	console.log("doing game tick");
	for (let curEntity of entityList) {
		curEntity.doGameTick();
	}
}

drawGame();