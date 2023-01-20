import { entityList } from "./entity-list.js";
import { gameMap } from "./game-map.js";
import { tileTypes } from "./tile-types.js";
import { playerEntity } from "./player-manager.js";
import { getSprite } from "../game/sprite-manager.js";

let canvasElem = document.getElementById("canvas");
let canvasContext = canvasElem.getContext("2d");

let canvasScale = 64;

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

export function clearCanvas() {
	canvasContext.fillStyle = "#222";
	canvasContext.fillRect(0, 0, 9999, 9999);
}

export function gameDraw(drawImg, drawX, drawY) {
	canvasContext.drawImage(drawImg, (drawX - playerEntity.posX + 5) * canvasScale, (drawY - playerEntity.posY + 3) * canvasScale, canvasScale, canvasScale);
}

export function drawText(content, color, drawX, drawY) {
	canvasContext.font = "16px Arial";
	canvasContext.fillStyle = color;
	canvasContext.textAlign = "center";
	canvasContext.fillText(content, (drawX - playerEntity.posX + 5.1) * canvasScale, (drawY - playerEntity.posY + 3.2) * canvasScale);
}

export function resetCanvasSize() {
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	canvasScale = Math.min(windowWidth / 11, windowHeight / 7);

	canvasElem.width = canvasScale * 11;
	canvasElem.height = canvasScale * 7;
	canvasElem.style.marginLeft = ((windowWidth - canvasElem.width) / 2) + "px";
	canvasElem.style.marginTop = ((windowHeight - canvasElem.height) / 2) + "px";
	canvasContext.imageSmoothingEnabled = false; // must be re-set on every size change
}

addEventListener("resize", (event) => {resetCanvasSize(); drawGame()});