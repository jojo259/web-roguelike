import { clearCanvas } from "../game/canvas.js";
import { entityList } from "./entity-list.js"
import { gameMap } from "./game-map.js"
import { tileTypes } from "./tile-types.js"
import { playerEntity } from "./player-manager.js"
import { gameDraw } from "./canvas.js";
import { getSprite } from "../game/sprite-manager.js";

export async function drawGame() {
	clearCanvas();
	await drawMap();
	await drawEntities();
	for (let curEntity of entityList) {
		curEntity.resetPerTickDrawVariables();
	}
}

async function drawMap() {
	for (let [atX, curRow] of gameMap.slice(Math.max(0, playerEntity.posX - 5), playerEntity.posX + 6).entries()) {
		atX += Math.max(0, playerEntity.posX - 5)
		for (let [atY, tileId] of curRow.slice(Math.max(0, playerEntity.posY - 3), playerEntity.posY + 4).entries()) {
			atY += Math.max(0, playerEntity.posY - 3)
			gameDraw(await getSprite(`/src/sprites/tiles/${tileTypes[tileId].name}.png`), atX, atY);
		}
	}
}

async function drawEntities() {
	for (let curEntity of entityList) {
		if (curEntity.inPlayerView()) {
			curEntity.drawSprite();
		}
	}
}