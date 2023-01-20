import { Alive } from "./alive.js";

export class Player extends Alive {
	constructor({posX = 0, posY = 0}) {
		super({});
		this.name = "player";
		this.spritePath = "entity/player/player-regular.png";
		this.posX = posX;
		this.posY = posY;
		this.health = 20
		this.damage = 3;
	}
}