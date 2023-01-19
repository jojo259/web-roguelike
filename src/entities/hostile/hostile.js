import { Entity } from "../entity.js";

export class Hostile extends Entity {
	constructor({name = "hostile", posX = 0, posY = 0}) {
		super({})
		this.name = name;
		this.posX = posX;
		this.posY = posY;
	}

	doGameTick() {
		this.moveTowardPlayerDumb();
	}
}