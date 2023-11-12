window.addEventListener("deviceorientation", on_device_orientation);

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var centru = { x: canvas.width / 2, y: canvas.height / 2 };
var latura_patrat = 50;

function on_device_orientation(evt) {
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;

    document.getElementById("a").innerHTML = "alpha = " + alpha;
    document.getElementById("b").innerHTML = "beta = " + beta;
    document.getElementById("c").innerHTML = "gamma = " + gamma;

    // Clear canvas and draw based on each angle
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw based on alpha angle
    context.save();
    context.translate(centru.x / 2, centru.y / 2);
    context.rotate(alpha * Math.PI / 180);
    context.beginPath();
    context.rect(-latura_patrat / 2, -latura_patrat / 2, latura_patrat, latura_patrat);
    context.stroke();
    context.restore();

    // Draw based on beta angle
    context.fillStyle = "#6A0888";
    context.beginPath();
    context.fillRect(180, 150, beta, 50);

    // Draw based on gamma angle
    context.fillStyle = "#6A0888";
    context.beginPath();
    context.fillRect(180, 150, 50, gamma);
}
