export const platforms = [];

export function clearPlatforms() {
  platforms.splice(0, platforms.length);
}

export function createPlatform(x, y, width, height) {
  const platform = {
    x,
    y,
    width,
    height,
    color: 'white',
    type: "platform"
  };
  platforms.push(platform);
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlatforms(context, camera) {
  for(let i = 0; i < platforms.length; i++) {
    context.fillStyle = platforms[i].color;
    context.fillRect(
      platforms[i].x - camera.x,
      platforms[i].y - camera.y,
      platforms[i].width,
      platforms[i].height
    );
  }
}