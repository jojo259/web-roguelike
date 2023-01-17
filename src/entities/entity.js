let canvasContext = document.getElementById("canvas").getContext("2d");
canvasContext.clearRect(0, 0, 80, 80);
canvasContext.imageSmoothingEnabled = false;

canvasContext.fillStyle = "#222";
canvasContext.fillRect(0, 0, 640, 480);

export class Entity {
	constructor({name = "entity"}) {
		this.name = "abc";
	}

	drawSprite() {
		let spriteImage = new Image();
		spriteImage.src = `/src/entities/sprites/${this.spriteName}.png`; // why does this have to be absolute
		spriteImage.onload = function(){
			canvasContext.drawImage(spriteImage, 8, 8, 4 * spriteImage.width, 4 * spriteImage.height);
		}
		console.log(`drew ${this.name}`);
	}
}