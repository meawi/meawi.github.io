import { createGoal, drawGoal, goalRect } from "./lib/goal.js";
import { createLevel, startLevel } from "./lib/levels.js";
import { clearPlatforms, createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer, playerRect } from "./lib/player.js";
import { clearSpikes, createSpike, drawSpikes } from "./lib/spikes.js";

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 450;

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

const camera = {
  x: 0,
  y: 0
};

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //
  // Uppdatera alla game objects.
  //

  updatePlayer();
  
  camera.x = Math.max(0, playerRect.x - canvas.width/4);
  camera.x = Math.min(camera.x, goalRect.x + goalRect.width - canvas.width);

  //
  // Rit ut alla game objects
  //

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatforms(context, camera);
  drawSpikes(context, camera);
  drawGoal(context, camera);
  drawPlayer(context, camera);
}


//
// Skapa alla levels
//

// Level 0
createLevel(() => {
  clearPlatforms();
  clearSpikes();

  createSpike(40 * 9, canvas.height - 40 * 0)
  createPlatform(40 * 14.8, canvas.height - 40 * 1, 40 * 5, 40 * 0.3);
  createSpike(40 * 17, canvas.height - 40 * 1);
  createPlatform(40 * 22, canvas.height - 40 * 2, 40 * 1.3, 40 * 0.3);
  createSpike(40 * 20, canvas.height - 40 * 0)
  createSpike(40 * 21, canvas.height - 40 * 0);
  createSpike(40 * 22, canvas.height - 40 * 0);
  createSpike(40 * 23, canvas.height - 40 * 0);
  createSpike(40 * 24, canvas.height - 40 * 0);
  createSpike(40 * 25, canvas.height - 40 * 0);
  createSpike(40 * 26, canvas.height - 40 * 0);
  createPlatform(40 * 27, canvas.height - 40 * 1, 40 * 1.3, 40 * 0.3);
  createPlatform(40 * 31, canvas.height - 40 * 2, 40 * 1.3, 40 * 0.3);
  createPlatform(40 * 35, canvas.height - 40 * 3, 40 * 1.3, 40 * 0.3);
  createSpike(40 * 35, canvas.height - 40 * 0, 40 * 1, 40 * 1);
  createPlatform(40 * 39, canvas.height - 40 * 2, 40 * 1, 40 * 4);
  createPlatform(40 * 39, canvas.height - 40 * 8, 40 * 1, 40 * 3);
  createPlatform(40 * 43, canvas.height - 40 * 3, 40 * 1, 40 * 4);
  createPlatform(40 * 43, canvas.height - 40 * 10, 40 * 1, 40 * 4);
  createPlatform(40 * 46, canvas.height - 40 * 4, 40 * 1, 40 * 4);
  createPlatform(40 * 46, canvas.height - 40 * 11, 40 * 1, 40 * 4);
  createPlatform(40 * 50, canvas.height - 40 * 4, 40 * 10, 40 * 0.3);
  createPlatform(40 * 50, canvas.height - 40 * 7, 40 * 10, 40 * 0.3);
  createGoal(40 * 65, 0, 40, canvas.height);
});


// Level 1
createLevel(() => {
  clearPlatforms();
  clearSpikes();
  
  createSpike(40 * 9, canvas.height - 40 * 0)

  createSpike(40 * 17, canvas.height - 40 * 0, 35 * 1, 25 * 1);
  createSpike(40 * 18, canvas.height - 40 * 0)


  createSpike(40 * 24, canvas.height - 40 * 0)
  createSpike(40 * 25, canvas.height - 40 * 0)
  createPlatform(40 * 26, canvas.height - 40 * 1, 40 * 1, 40 * 4);
  createSpike(40 * 27, canvas.height - 40 * 0)
  createSpike(40 * 28, canvas.height - 40 * 0)
  createPlatform(40 * 29, canvas.height - 40 * 2, 40 * 1, 40 * 4);
  createSpike(40 * 30, canvas.height - 40 * 0)
  createSpike(40 * 31, canvas.height - 40 * 0)
  createPlatform(40 * 32, canvas.height - 40 * 3, 40 * 1, 40 * 4);

  createSpike(40 * 40, canvas.height - 40 * 0)
  createSpike(40 * 41, canvas.height - 40 * 0)

  createPlatform(40 * 47, canvas.height - 40 * 1, 40 * 5, 40 * 1);
  createSpike(40 * 52, canvas.height - 40 * 0)
  createSpike(40 * 53, canvas.height - 40 * 0)
  createPlatform(40 * 54, canvas.height - 40 * 1, 40 * 7, 40 * 1);
  createSpike(40 * 57, canvas.height - 40 * 1)
  createSpike(40 * 61, canvas.height - 40 * 0)
  createSpike(40 * 62, canvas.height - 40 * 0)
  createPlatform(40 * 63, canvas.height - 40 * 2, 40 * 7, 40 * 2);
  createSpike(40 * 66, canvas.height - 40 * 2)

  createPlatform(40 * 72, canvas.height - 40 * 3, 40 * 1.3, 40 * 0.3);
  createPlatform(40 * 76, canvas.height - 40 * 4, 40 * 1.3, 40 * 0.3);
  createPlatform(40 * 80, canvas.height - 40 * 5, 40 * 5, 40 * 0.3);
  createPlatform(40 * 80, canvas.height - 40 * 8, 40 * 5, 40 * 0.3);


  createGoal(40 * 85, 0, 40, canvas.height);
});

// Level 2
createLevel(() => {
  clearPlatforms();
  clearSpikes();






});

//
// Starta level 0
//

startLevel(0);