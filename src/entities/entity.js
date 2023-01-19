import { gameDraw } from "../game/canvas.js";
import { getSprite } from "../game/sprite-manager.js";

export class Entity {
	constructor({name = "entity", posX = 0, posY = 0}) {
		this.name = "abc";
		this.posX = posX;
		this.posY = posY;
	}

	async drawSprite() {
		gameDraw(await getSprite("src/sprites/" + this.spritePath), this.posX, this.posY);
	}
}