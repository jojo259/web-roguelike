export let canvasContext = document.getElementById("canvas").getContext("2d");

export function clearCanvas() {
	canvasContext.clearRect(0, 0, 80, 80);
	canvasContext.imageSmoothingEnabled = false;

	canvasContext.fillStyle = "#222";
	canvasContext.fillRect(0, 0, 640, 480);
}