import { Entity } from "../entity.js";
import { Player } from "./player.js";
import { entityList } from "../../game/entity-list.js";

export class Alive extends Entity {
	constructor({name = "alive"}) {
		super({})
		this.name = name;
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

	takeDamage(damage, damageSource) {
		this.health -= damage;
		this.checkIfKilledBy(damageSource);
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