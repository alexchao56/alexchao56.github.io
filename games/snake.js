
var drawingCanvas = document.getElementById('myDrawing');

// Check the element is in the DOM and the browser supports canvas
if (drawingCanvas.getContext) {
    // Initaliase a 2-dimensional drawing context
    var context = drawingCanvas.getContext('2d');

    // All necessary local variables
    var HEIGHT = 325;
    var WIDTH = 500;
    var xdim = 30;
    var ydim = 30;
    var gameOver = false;
    var snake = new Array();
    var direction;
    var score;
    var highScore = 0;
    var lastDirection;
    var lastTarget =[-1,-1];
    var target;
    var paused = true;
    var threshold;
    var level;
    var levelUp;

    function resetSnake() {
        snake = [];
        snake[0] = [xdim/2,4];
        snake[1] = [xdim/2,3];
        snake[2] = [xdim/2,2];
        snake[3] = [xdim/2,1];
        snake[4] = [xdim/2,0];

        if (score > highScore) {
            highScore = score;
        }
        direction = "South";
        lastDirection = "South";
        score = 0;
        lastTarget = [-1,-1];
        generateNewTarget();
        level = 1;
        threshold = 0;
        levelUp = 9;
    }

    // advances the snake in direction
    function advanceSnake() {
        if (isTarget(nextHead())) { // if we hit the target
            score += 1;
            if (score > highScore) {
                highScore = score;
            }
            generateNewTarget();
            snake.push([0,0]); // make the snake one longer
        }

        if (outOfBounds(nextHead())) { 
            gameOver = true;
            drawGameOver();
            resetSnake();
            return;
        }

        for (var i = snake.length-2; i>=0; i-=1) {
            snake[i+1][0] = snake[i][0];
            snake[i+1][1] = snake[i][1];
        }
        snake[0] = nextHead();
        lastDirection = direction;
    }

    function nextHead() {
        if (direction == "West") return [snake[0][0]-1, snake[0][1]];
        if (direction == "East") return [snake[0][0]+1, snake[0][1]];
        if (direction == "South") return [snake[0][0], snake[0][1]+1];
        if (direction == "North") return [snake[0][0], snake[0][1]-1];
    }

    function outOfBounds(head) {
        if (head[0] < 0 || head[1] < 0 || head[0] >= xdim || head[1] >= ydim) {
            return true;
        }

        for (var i = 0; i < snake.length; i++)
        {
            if (head[0] == snake[i][0] && head[1] == snake[i][1]) { // if snake hits itself
               return true;
            }
        }
        return false;
    }

    function isTarget(head) {
        if (head[0] == target[0] && head[1] == target[1]) {
            return true;
        }
        return false;
    }

    function generateNewTarget() {
        target = [Math.floor(Math.random() * xdim), Math.floor(Math.random() * ydim)];
        if (outOfBounds(target)) { // invalid target
            generateNewTarget();
        }
        if (target[0] == lastTarget[0] && target[1] == lastTarget[1]) { // same location target...
            generateNewTarget();
        }
    }

    function drawSnake() {
        context.fillStyle = "white";
        context.fillRect(0, 0, WIDTH+100, HEIGHT+100);
        context.strokeRect(0, 0, WIDTH, HEIGHT);
        var xsize = WIDTH/xdim;
        var ysize = HEIGHT/ydim;

        context.fillStyle = "lime";
        context.fillRect(xsize*snake[0][0], ysize*snake[0][1], xsize, ysize); // fill the head
        context.fillStyle = "blue";
        for (var i = 1; i < snake.length; i++) {
            context.fillRect(xsize*snake[i][0], ysize*snake[i][1], xsize, ysize); // fill the body
        }
        context.fillStyle = "red";
        context.fillRect(xsize*target[0], ysize*target[1], xsize, ysize); // fill target

        // Write score
        context.fillStyle = "black";
        context.font = "19px sans-serif";
        context.textAlign = "start";
        var speedtext = "Current level: " + level
        context.fillText("Score: " + score + "       " + speedtext + "      " + "High Score: " + highScore, 0, HEIGHT + 23);
        context.fillText("Press spacebar for popup instruction", 0, HEIGHT + 47);

        // show paused
        if (paused) {
            context.fillStyle = "red"
            context.font = "30px sans-serif";
            context.textAlign = "center";
            context.fillText("Paused (press 'p' to resume)", WIDTH/2, HEIGHT/2);
        }
    }

    function drawGameOver() {
        context.fillStyle = "red"
        context.font = "30px sans-serif";
        context.textAlign = "center";
        context.fillText("Game Over! Your score: " + score, WIDTH/2, HEIGHT/2);
        context.fillText("Press Enter to play a new game.", WIDTH/2, HEIGHT/2+35);
    }

    // http://www.asquare.net/javascript/tests/KeyCode.html
    function onKeyDown(evt) {
        if (evt.keyCode == 32) alert("Play Snake! Use the arrow keys to move the snake around. Press 'enter' when gameover to replay. Try to beat your own highscore and have fun!\n\n PS: If you reach level 10, send me an email xD"); 
        if (evt.keyCode == 37) {if (lastDirection != "East") direction = "West"};   // press left arrow
        if (evt.keyCode == 38) {if (lastDirection != "South") direction = "North"}; // press up arrow
        if (evt.keyCode == 39) {if (lastDirection != "West") direction = "East"};   // press right arrow
        if (evt.keyCode == 40) {if (lastDirection != "North") direction = "South"}; // press down arrow
        if (evt.keyCode == 80) {if (!gameOver) paused = !paused}; // press 'p'
        if (evt.keyCode == 13) gameOver = false; // press 'enter'
    }

    $(document).keydown(onKeyDown);

    function mainLoop() {
        if (!gameOver && !paused) {
            advanceSnake();
            if (!gameOver) {
                drawSnake();
            }
        }

        if (paused) {
            drawSnake();
        }
        
        if (snake.length == levelUp && threshold <= 150) {
            levelUp += 5;
            threshold += 15;
            level++;
        }
        setTimeout(mainLoop, 150-threshold);
    }

    // Play the game!
    resetSnake();
    mainLoop();
}