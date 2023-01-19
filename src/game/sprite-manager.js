let loadedSprites = {}

export async function getSprite(spritePath) {
	if (spritePath in loadedSprites) {
		return loadedSprites[spritePath];
	}
	else {
		let loadedSprite = await getUnloadedSprite(spritePath);
		loadedSprites[spritePath] = loadedSprite;
		return loadedSprite;
	}
}

async function getUnloadedSprite(spritePath) {
	let spriteImage = await fetch(spritePath);
	let spriteBlob = await spriteImage.blob();
	let spriteBitmap = await createImageBitmap(spriteBlob);
	return spriteBitmap;
}