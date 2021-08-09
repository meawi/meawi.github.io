export const spikes = [];

export function clearSpikes() {
  spikes.splice(0, spikes.length);
}

export function createSpike(x, groundY, width=30, height=36) {
  const spike = {
    x,
    y: groundY - height,
    width: width,
    height: height,
    type: "spike"
  };
  spikes.push(spike);
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawSpikes(context, camera) {
  context.fillStyle = 'red';
  for(let i = 0; i < spikes.length; i++) {
    context.fillRect(
      spikes[i].x - camera.x,
      spikes[i].y - camera.y,
      spikes[i].width,
      spikes[i].height
    );
  }
}
