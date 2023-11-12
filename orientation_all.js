window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;

    document.getElementById("a").innerHTML = "alpha = " + alpha;
    document.getElementById("b").innerHTML = "beta = " + beta;
    document.getElementById("c").innerHTML = "gamma = " + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var centru = { x: canvas.width / 2, y: canvas.height / 2 };
    var latura_patrat = 50;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#6A0888";
    context.save();
    context.translate(centru.x, centru.y);

    // Draw based on alpha angle
    context.rotate(alpha * (Math.PI / 180));
    context.beginPath();
    context.rect(-latura_patrat / 2, -latura_patrat / 2, latura_patrat, latura_patrat);
    context.stroke();

    // Draw based on beta angle
    context.rotate(-alpha * (Math.PI / 180)); // Undo alpha rotation
    context.rotate(beta * (Math.PI / 180));
    context.beginPath();
    context.fillRect(-latura_patrat / 2, -latura_patrat / 2, latura_patrat, latura_patrat);

    // Draw based on gamma angle
    context.rotate(-beta * (Math.PI / 180)); // Undo beta rotation
    context.rotate(gamma * (Math.PI / 180));
    context.beginPath();
    context.arc(0, 0, latura_patrat / 2, 0, 2 * Math.PI);
    context.stroke();

    context.restore(); // Restore the saved state
}
