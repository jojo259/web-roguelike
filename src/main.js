console.log("a");

import { Entity } from "./entities/entity.js";
import { Slime } from "./entities/slime.js";

let mySlime = new Slime({size: 8});

console.log(`created my slime as ${mySlime.name}`);

mySlime.drawSprite();