import { Alive } from "../alive.js";

export class Hostile extends Alive {
	constructor({posX = 0, posY = 0}) {
		super({});
		this.name = "hostile";
		this.posX = posX;
		this.posY = posY;
	}

	doGameTick() {
		this.moveTowardPlayerDumb();
	}
}