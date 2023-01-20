let canvasContext = document.getElementById("canvas").getContext("2d");
import { playerEntity } from "./player-manager.js"

canvasContext.imageSmoothingEnabled = false;

export function clearCanvas() {
	canvasContext.fillStyle = "#222";
	canvasContext.fillRect(0, 0, 9999, 9999);
}

export function gameDraw(drawImg, drawX, drawY) {
	canvasContext.drawImage(drawImg, (drawX - playerEntity.posX + 5) * 4 * 16, (drawY - playerEntity.posY + 3) * 4 * 16, 64, 64);
}

export function drawText(content, color, drawX, drawY) {
	canvasContext.font = "16px Arial";
	canvasContext.fillStyle = color;
	canvasContext.textAlign = "center";
	canvasContext.fillText(content, (drawX - playerEntity.posX + 5.1) * 4 * 16, (drawY - playerEntity.posY + 3.2) * 4 * 16);
}