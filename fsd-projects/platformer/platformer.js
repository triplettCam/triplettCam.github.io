$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1, 650, 150 ,10, "darkred")
  createPlatform(200, 520, 200 ,10,  "darkred")
  createPlatform(500, 520, 150 ,10,  "darkred")
    createPlatform(325, 390, 150 ,10,  "darkred")
      createPlatform(325, 290, 10 ,100,  "darkred")
      createBadPlatform(0, 730, 20000, 10)
      createPlatform(650, 300, 10, 430, "darkred")
      createPlatform(625, 300, 175, 10, "darkred")
      createPlatform(660, 450, 160, 10, "darkred")
      createPlatform(660, 600, 145, 10,"darkred")
      createPlatform(820, 700, 500, 10, "darkgreen")
      createPlatform(900, 100, 10, 500, "darkgreen")
      createPlatform(1200, 600, 500, 10, "darkgreen")
      

    


  



    // TODO 3 - Create Collectables
createCollectable("diamond", 350, 250, .7, .01);
createCollectable("steve", 200, 170, 0.5, 0.7);
createCollectable("grace", 660, 500, 0.5, 0.7)
createCollectable("kennedi", )

    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1500);
    createCannon("top", 750, 1500);
    createCannon("top", 550, 1500);
    createCannon("right", 725, 1500)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
