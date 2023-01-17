import { entityList } from "./entity-list.js"
import { Player } from "../entities/player.js"

export let playerEntity = null;

for (let curEntity of entityList) {
	if (curEntity instanceof Player) {
		playerEntity = curEntity;
		console.log("bazinga found player entity");
	}
}