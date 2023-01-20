console.log("init");

import { drawGame, resetCanvasSize } from "./game/draw-game.js";
import { entityList } from "./game/entity-list.js"
import { findPlayerEntityIfNotFound } from "./game/player-manager.js"

let atGameTick = 0;

findPlayerEntityIfNotFound();

export function doGameTick() {
	atGameTick++;
	console.log(`doing game tick ${atGameTick}`);
	for (let curEntity of entityList) {
		curEntity.doGameTick();
	}
	drawGame();
}

resetCanvasSize();
drawGame();