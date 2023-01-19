import { gameDraw } from "../game/canvas.js";
import { getSprite } from "../game/sprite-manager.js";
import { randomInt } from "../util.js";
import { playerEntity } from "../game/player-manager.js";

export class Entity {
	constructor({name = "entity", posX = 0, posY = 0}) {
		this.name = "abc";
		this.posX = posX;
		this.posY = posY;
	}

	async drawSprite() {
		gameDraw(await getSprite("src/sprites/" + this.spritePath), this.posX, this.posY);
	}

	inPlayerView() {
		if (Math.abs(playerEntity.posX - this.posX) + Math.abs(playerEntity.posY - this.posY) < 9) {
			return true;
		}
		return false;
	}

	doGameTick() {

	}

	moveRandomly() {
		let randomMove = randomInt(1, 4);

		switch (randomMove) {
			case 1:
				this.posY--;
				break;
			case 2:
				this.posY++;
				break;
			case 3:
				this.posX++;
				break;
			case 4:
				this.posX--;
				break;
		}
	}
}