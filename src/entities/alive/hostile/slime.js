import { Hostile } from "./hostile.js";

export class Slime extends Hostile {
	constructor({posX = 0, posY = 0}) {
		super({});
		this.name = "slime";
		this.health = 8;
		this.damage = 1;
		this.spritePath = "entity/slime/slime-regular.png";
		this.posX = posX;
		this.posY = posY;
	}
}