// Authors: Albert Paez, Ryan Patrick, Ryan Carney
// Description: P5 key animation fcns.
// Add. Info: p5js.org/reference

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size: 10, wid:90, hgt:80 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.


function setup() // P5 Setup Fcn
{

    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid(225,0, 'gray', 'white');
    
    
}


function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{

    //Draw the following titles into the cells
    drawWords('MERGESORT', 50);
    drawWords('QUICKSORT', 280);
    drawWords('SELECTION SORT', 475);
    drawWords('GOLDS PORE SORT', 690);
  
}

function drawWords(title, x) {
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

function mousePressed( )
{
    let x = mouseX;
    let y = mouseY;
    //console.log( "mouse x,y = " + x + "," + y );
    let sz = g_canvas.cell_size;
    let gridx = round( (x-0.5) / sz );
    let gridy = round( (y-0.5) / sz );
    //console.log( "grid x,y = " + gridx + "," + gridy );
    //console.log( "box wid,hgt = " + g_box.wid + "," + g_box.hgt );
    g_bot.x = gridx + g_box.wid; // Ensure its positive.
    //console.log( "bot x = " + g_bot.x );
    g_bot.x %= g_box.wid; // Wrap to fit box.
    g_bot.y = gridy + g_box.hgt;
    //console.log( "bot y = " + g_bot.y );
    g_bot.y %= g_box.hgt;
    //console.log( "bot x,y = " + g_bot.x + "," + g_bot.y );
    draw_bot( );
}