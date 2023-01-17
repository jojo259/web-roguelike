import { Entity } from "./entity.js";

export class Slime extends Entity {
	constructor({name = "slime", size = 8, posX = 0, posY = 0}) {
		super({})
		this.name = name;
		this.size = size;
		this.spriteName = "slime";
		this.posX = posX;
		this.posY = posY;
	}
}