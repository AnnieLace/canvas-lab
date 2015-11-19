/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.getElementById('drawing-canvas');
    var ctx = canvas.getContext('2d');

    var mousedown = false;
    document.addEventListener('mousedown', function(evt) {
        mousedown = true;
        var canvasX = evt.clientX - canvas.offsetLeft;
        var canvasY = evt.clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.moveTo(canvasX, canvasY);
    });

    document.addEventListener('mousemove', function(evt) {
        if(mousedown) {
            var canvasX = evt.clientX - canvas.offsetLeft;
            var canvasY = evt.clientY - canvas.offsetTop;
            ctx.lineTo(canvasX, canvasY);
            ctx.stroke();
        }
    });

    document.addEventListener('mouseup', function(evt) {
        var canvasX = evt.clientX - canvas.offsetLeft;
        var canvasY = evt.clientY - canvas.offsetTop;
        ctx.lineTo(canvasX, canvasY);
        ctx.stroke();
        mousedown = false;
    });

    var colorPicker = document.getElementById('line-color-inp');

    colorPicker.addEventListener('change', function() {
        ctx.strokeStyle = colorPicker.value;
    });

    var lineWidth = document.getElementById('line-width-inp');
    lineWidth.addEventListener('change', function() {
        ctx.lineWidth = lineWidth.value;
    });

    var lineEnd = document.getElementById('line-end-inp');
    lineEnd.addEventListener('change', function() {
        ctx.lineCap = lineEnd.value;
    });

    var lineJoin = document.getElementById('line-join-inp');
    lineJoin.addEventListener('change', function() {
        ctx.lineJoin = lineJoin.value;
    })
}); //DOMContentLoaded
