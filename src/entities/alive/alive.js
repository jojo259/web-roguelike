import { Entity } from "../entity.js";

export class Alive extends Entity {
	constructor({name = "alive"}) {
		super({})
		this.name = name;
	}
}