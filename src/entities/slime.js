import { Entity } from "./entity.js";

export class Slime extends Entity {
	constructor({name = "slime", size = 8}) {
		super({name: name})
		this.name = name;
		this.size = 8;
		this.spriteName = "slime";
	}
}