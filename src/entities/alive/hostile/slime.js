import { Hostile } from "./hostile.js";

export class Slime extends Hostile {
	constructor({name = "slime", size = 8, posX = 0, posY = 0}) {
		super({})
		this.name = name;
		this.size = size;
		this.spritePath = "entity/slime/slime-regular.png";
		this.posX = posX;
		this.posY = posY;
	}
}