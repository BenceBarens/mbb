const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

let columns, rows = 20;
let arena, player;
let blockSize;

function resizeCanvas() {
    // Bereken kolommen zodat blokjes vierkant blijven
    columns = Math.floor(window.innerWidth / (window.innerHeight / rows));

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    blockSize = canvas.height / rows;
    context.setTransform(blockSize, 0, 0, blockSize, 0, canvas.height - (blockSize * rows));

    arena = createMatrix(columns, rows); // Verander matrixgrootte
    playerReset();
    draw();
}

function createMatrix(w, h) {
    return Array.from({ length: h }, () => Array(w).fill(0));
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = "#6c837b";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawMatrix(arena, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

function update() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
    }
    draw();
    setTimeout(update, 500);
}

function collide(arena, player) {
    return player.matrix.some((row, y) => 
        row.some((value, x) => 
            value !== 0 && (arena[y + player.pos.y] && arena[y + player.pos.y][x + player.pos.x]) !== 0
        )
    );
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function playerReset() {
    const pieces = [
        [[1, 1, 1, 1]],
        [[1, 1], [1, 1]],
        [[0, 1, 0], [1, 1, 1]],
        [[1, 0, 0], [1, 1, 1]],
        [[0, 0, 1], [1, 1, 1]]
    ];
    player = {
        matrix: pieces[Math.floor(Math.random() * pieces.length)],
        pos: { x: Math.floor(columns / 2) - 1, y: 0 }
    };
}

function rotate(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i])).reverse();
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
        player.pos.x -= dir;
    }
    draw();
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
    }
    draw();
}

function playerRotate() {
    const rotated = rotate(player.matrix);
    const oldMatrix = player.matrix;
    player.matrix = rotated;
    if (collide(arena, player)) {
        player.matrix = oldMatrix;
    }
    draw();
}

// Voorkom scrollen bij pijltjestoetsen
document.addEventListener("keydown", event => {
    if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
    }
    if (event.key === "ArrowLeft") {
        playerMove(-1);
    } else if (event.key === "ArrowRight") {
        playerMove(1);
    } else if (event.key === "ArrowDown") {
        playerDrop();
    } else if (event.key === "ArrowUp") {
        playerRotate();
    }
});

window.addEventListener("resize", resizeCanvas);

// Start spel
resizeCanvas();
update();