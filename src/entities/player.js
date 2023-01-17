import { Entity } from "./entity.js";

export class Player extends Entity {
	constructor({posX = 0, posY = 0}) {
		super({})
		this.name = "player";
		this.spriteName = "player";
		this.posX = posX;
		this.posY = posY;
	}
}