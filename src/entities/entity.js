import { gameDraw } from "../game/canvas.js";

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
			gameDraw(spriteImage, this.posX, this.posY);
		}
		console.log(`drew ${this.name}`);
	}
}