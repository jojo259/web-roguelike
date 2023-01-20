import { Entity } from "../entity.js";
import { Player } from "./player.js";
import { entityList } from "../../game/entity-list.js";
import { drawText, gameDraw } from "../../game/canvas.js";
import { getSprite } from "../../game/sprite-manager.js";

export class Alive extends Entity {
	constructor({}) {
		super({});
		this.name = "alive";
		this.damagedOnLastTick = false;
	}

	async drawSprite() {
		super.drawSprite();
		if (this.damagedOnLastTick) {
			drawText(this.health, "red", this.posX, this.posY);
		}
	}

	resetPerTickDrawVariables() {
		this.damagedOnLastTick = false;
	}

	movedOntoBy(byEntity) {
		if (byEntity instanceof Player || this instanceof Player) {
			console.log(`${byEntity.name} moved onto ${this.name}`);
			this.attackedBy(byEntity);
			return true;
		}
		return false;
	}

	attackedBy(byEntity) {
		this.takeDamage(byEntity.damage, byEntity);
		console.log(`${byEntity.name} attacked ${this.name}, now at ${this.health} health`);
	}

	takeDamage(damageNum, damageSource) {
		this.health -= damageNum;
		this.checkIfKilledBy(damageSource);
		this.damagedOnLastTick = true;
		console.log(`${this.name} took ${damageNum} damage from ${damageSource.name}`);
	}

	checkIfKilledBy(byEntity) {
		if (this.health <= 0) {
			console.log(`${this.name} killed by ${byEntity.name}`);
			this.killedBy(byEntity);
		}
	}

	killedBy(byEntity) {
		this.die();
	}

	die() {
		entityList.splice(entityList.indexOf(this), 1);
	}
}