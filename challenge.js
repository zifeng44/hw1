<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
<meta charset="utf-8" />
</head>
<body>
<script>

var bubbles = [];

function setup() {
    createCanvas(800, 600);

    for (var i = 0; i < 10; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(40, 120)
        };
        bubbles.push(bubble);
    }
}

function draw() {
    background(255);

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                canvas; // add bubble!


            }
            fill(0, 0, 200, 200);
        } else {
            fill(255, 50, 0, 100);
        }

        ellipse(bubble.x, bubble.y, bubble.radius*2);
        bubble.x += random(-5, 5);
        bubble.y += random(-5, 5);
    }
}

</script>
</body>
</html>
