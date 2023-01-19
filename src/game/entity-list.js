import { Player } from "../entities/player.js";
import { Slime } from "../entities/hostile/slime.js";
import { randomInt } from "../util.js";

export let entityList = [new Player({posX: 15, posY: 15})];

for (let i = 0; i < 64; i++) {
	entityList.push(new Slime({posX: randomInt(0, 31), posY: randomInt(0, 31), size: randomInt(1, 9)}));
}