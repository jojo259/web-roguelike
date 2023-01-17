import { clearCanvas } from "../game/canvas.js";
import { entityList } from "./entity-list.js"
import { gameMap } from "./game-map.js"
import { tileTypes } from "./tile-types.js"
import { playerEntity } from "./player-manager.js"
import { canvasContext } from "./canvas.js";
import { gameDraw } from "./canvas.js";

export function drawGame() {
	clearCanvas();
	drawMap();
	drawEntities();
}

function drawMap() {
	for (let [atX, curRow] of gameMap.slice(Math.max(0, playerEntity.posX - 5), playerEntity.posX + 6).entries()) {
		atX += Math.max(0, playerEntity.posX - 5)
		for (let [atY, tileId] of curRow.slice(Math.max(0, playerEntity.posY - 3), playerEntity.posY + 4).entries()) {
			atY += Math.max(0, playerEntity.posY - 3)
			let spriteImage = new Image();
			spriteImage.src = `/src/tiles/${tileTypes[tileId].name}.png`; // why does this have to be absolute
			spriteImage.onload = () => {
				gameDraw(spriteImage, atX, atY);
			}
		}
	}
}

function drawEntities() {
	for (let curEntity of entityList) {
		console.log(curEntity);
		curEntity.drawSprite();
	}
}