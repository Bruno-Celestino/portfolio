'use strict'

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, 500, 500);
    

    var c = 0;
    var x = 0;
    var y = 0;

    var col = ["green", "white", "green", "red"];
    var restante = col.length;

function drawBox() {


if (x === 500) {
    x = 0;
    y += 50;
};

if (restante === 0) {

    return restante;
}
else {

    ctx.fillStyle = col[c];
    ctx.fillRect(x, y, 50, 50);
    c++;
    x += 50;
    restante--;
    drawBox();
};
};

drawBox();