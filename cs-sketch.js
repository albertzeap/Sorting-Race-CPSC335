// Authors: Albert Paez, Ryan Patrick, Ryan Carney
// Description: P5 key animation fcns.
// Add. Info: p5js.org/reference
// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size: 10, wid:90, hgt:80 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.
var raceMgr = new RaceManager();

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid(225,0, 'gray', 'white');
    if(raceMgr.get_mode() === 2) {
        document.getElementById("hexString").setAttribute('style', '');
    }
}


function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{

    //Draw the following titles into the cells
    drawTitles('MERGESORT', 50);
    drawTitles('QUICKSORT', 280);
    drawTitles('SELECTION SORT', 475);
    drawTitles('GOLD\'S PORE SORT', 690);

}

function drawTitles(title, x) {
    // The text() function needs three parameters:
    // the text to draw, the horizontal position,
    // and the vertical position
    textSize(20);
    fill(255);
    stroke('black');
    text(title, x, 50);

}


function keyPressed( )
{
    g_stop = ! g_stop;
}

function main() {
    raceMgr.start();
}