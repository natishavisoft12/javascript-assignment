// Global game object
const game = {
    box1: { x: 70, y: 80, w: 50, h: 50 },
    box2: { x: 100, y: 100, w: 50, h: 50 },
    animationFrame: null,
  };
  
  // Key tracking object
  const keyz = {
    ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
    w: false, s: false, a: false, d: false,
  };
  
  // Function to dynamically create elements
  function adder(parentId, tag, innerHTML, className) {
    const parent = document.getElementById(parentId);
    const element = document.createElement(tag);
    element.innerHTML = innerHTML;
    element.classList.add(className);
    parent.appendChild(element);
    return element;
  }
  
  // Add boxes to the game area
  const box1 = adder("gameArea", "div", "", "box box1");
  const box2 = adder("gameArea", "div", "", "box box2");
  
  // Update position and dimensions output
  function updateInfo() {
    document.getElementById("box1Info").textContent = `Box 1: x=${game.box1.x}, y=${game.box1.y}, w=${game.box1.w}, h=${game.box1.h}`;
    document.getElementById("box2Info").textContent = `Box 2: x=${game.box2.x}, y=${game.box2.y}, w=${game.box2.w}, h=${game.box2.h}`;
  }
  
  // Event listeners for key presses
  document.addEventListener("keydown", (e) => {
    if (keyz.hasOwnProperty(e.key)) keyz[e.key] = true;
  });
  
  document.addEventListener("keyup", (e) => {
    if (keyz.hasOwnProperty(e.key)) keyz[e.key] = false;
  });
  
  // Movement logic
  function mover() {
    const container = document.getElementById("gameArea");
    const containerRect = container.getBoundingClientRect();
  
    // Update Box 1 position
    if (keyz.ArrowUp) game.box1.y = Math.max(0, game.box1.y - 5);
    if (keyz.ArrowDown) game.box1.y = Math.min(containerRect.height - game.box1.h, game.box1.y + 5);
    if (keyz.ArrowLeft) game.box1.x = Math.max(0, game.box1.x - 5);
    if (keyz.ArrowRight) game.box1.x = Math.min(containerRect.width - game.box1.w, game.box1.x + 5);
  
    // Update Box 2 position
    if (keyz.w) game.box2.y = Math.max(0, game.box2.y - 5);
    if (keyz.s) game.box2.y = Math.min(containerRect.height - game.box2.h, game.box2.y + 5);
    if (keyz.a) game.box2.x = Math.max(0, game.box2.x - 5);
    if (keyz.d) game.box2.x = Math.min(containerRect.width - game.box2.w, game.box2.x + 5);
  
    // Apply new positions
    box1.style.left = `${game.box1.x}px`;
    box1.style.top = `${game.box1.y}px`;
    box2.style.left = `${game.box2.x}px`;
    box2.style.top = `${game.box2.y}px`;
  
    // Update info
    updateInfo();
  
    // Detect collision
    if (
      game.box1.x < game.box2.x + game.box2.w &&
      game.box1.x + game.box1.w > game.box2.x &&
      game.box1.y < game.box2.y + game.box2.h &&
      game.box1.y + game.box1.h > game.box2.y
    ) {
      console.log("Collision detected!");
    }
  
    // Request next animation frame
    game.animationFrame = requestAnimationFrame(mover);
  }
  
  // Start the movement loop
  game.animationFrame = requestAnimationFrame(mover);
  