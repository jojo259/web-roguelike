import { gameDraw } from "../game/canvas.js";
import { getSprite } from "../game/sprite-manager.js";
import { randomInt } from "../util.js";
import { playerEntity } from "../game/player-manager.js";
import { entityList } from "../game/entity-list.js";
import { gameMap, mapWidth, mapHeight } from "../game/game-map.js";
import { tileTypes } from "../game/tile-types.js"

export class Entity {
	constructor({name = "entity"}) {
		this.name = "entity";
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

	movedOntoBy(byEntity) {
		
	}

	attemptMove(dX, dY) {
		let newX = this.posX + dX;
		let newY = this.posY + dY;

		if (newX < 0 || newY < 0) {
			return false;
		}
		if (newX >= mapWidth || newY >= mapHeight) {
			return false;
		}
		
		if (!tileTypes[gameMap[newX][newY]].walkable) {
			return false;
		}

		for (let curEntity of entityList) {
			if (curEntity.posX == newX && curEntity.posY == newY) {
				if (curEntity.movedOntoBy(this)) {
					return true;
				}
				else {
					return false;
				}
			}
		}

		this.posX = newX;
		this.posY = newY;

		return true;
	}

	moveRandomly() {
		let randomMove = randomInt(1, 4);

		switch (randomMove) {
			case 1:
				this.attemptMove(0, -1);
				break;
			case 2:
				this.attemptMove(0, 1);
				break;
			case 3:
				this.attemptMove(1, 0);
				break;
			case 4:
				this.attemptMove(-1, 0);
				break;
		}
	}

	 moveTowardPlayerDumb() {
	 	let moveOrientation = randomInt(1, 2);

		if (moveOrientation == 1) {
			if (playerEntity.posX > this.posX) {
				this.attemptMove(1, 0);
			}
			else {
				this.attemptMove(-1, 0);
			}
		}
		else {
			if (playerEntity.posY > this.posY) {
				this.attemptMove(0, 1);
			}
			else {
				this.attemptMove(0, -1);
			}
		}
	}
}