import { canvasContext } from "../game/canvas.js";

export class Entity {
	constructor({name = "entity", posX = 0, posY = 0}) {
		this.name = "abc";
		this.posX = posX;
		this.posY = posY;
	}

	drawSprite() {
		let spriteImage = new Image();
		spriteImage.src = `/src/entities/sprites/${this.spriteName}.png`; // why does this have to be absolute
		spriteImage.onload = () => {
			canvasContext.drawImage(spriteImage, this.posX * 4 * 16, this.posY * 4 * 16, 4 * spriteImage.width, 4 * spriteImage.height);
		}
		console.log(`drew ${this.name}`);
	}
}