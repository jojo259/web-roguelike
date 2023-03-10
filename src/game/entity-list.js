import { Player } from "../entities/alive/player.js";
import { Slime } from "../entities/alive/hostile/slime.js";
import { randomInt } from "../util.js";

export let entityList = [new Player({posX: 15, posY: 15})];

for (let i = 0; i < 8; i++) {
	entityList.push(new Slime({posX: randomInt(0, 31), posY: randomInt(0, 31), size: randomInt(1, 9)}));
}