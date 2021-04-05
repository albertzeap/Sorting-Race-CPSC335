README.txt
Readme for Project2: Sorting Race
Team: Albert Paez, Ryan Patrick, Ryan Carney
Class: CPSC 335-03
Project 2: Sorting Race
------------------------------------------------------------

Intro

  The project displays each pass of 4 different sorting algorithms. The 4 sorting algorithms are: Selection Sort, Gold's Poresort, Mergesort, and Quicksort. Each algorithm will get a random 16-character hexadecimal string to sort.


   Rules
      1) Must display the string after each pass
      2) Must display one pass for each algorithm before moving onto next pass
      3) Delay each pass for about a second so that the audience can see what is happening

  This project uses HTML, Javascript (JS), and P5.js
  which is a JS-adapted version of the Processing Language.  CF HTML and
  JS on the web (eg, Wikipedia).  More on P5 is at
  p5js.org/reference.and at github.com/processing/p5.js/wiki.

Features

   You can start sorting by clicking the start button above the canvas.

Zip Contents

  File README.txt.  This file.

  File Sorting-Race.html. Drag and drop this into a browser to
    run the example or double click the file. Click the start button to begin sorting a random 16-character hexadecimal string.

  File p5.js. This is the P5 package.  It is loaded inside the html.

  File cs-sketch.js; This contains several P5 user-defined linkage functions
   (setup, draw, and mousePressed). P5's setup() is run once before page display.
    P5's draw() is run once per display frame, so you can do animation.

  File assets/styles.css.  This is an extra-small example of controlling
    webpage styling.  // Loaded inside the html.

  File assets/draw-stuff.js. This is an example to show loading a JS
    script file from a folder other than the index HTML file's
    folder location.  It also includes the utility draw_grid function
    written in P5+JS. // Loaded inside the html.

  File race-manager.js. This sets up the hexadecimal strings that will be passed into each algorithm through row-manager.js.

  File row-manager.js. This displays each pass of the string onto the canvas.

  File mergesort-manager.js. Uses a generator and runs the mergesort algorithm.

  File quicksort-manager.js. Uses a generator and runs the quicksort algorithm.

  File selectsort-manager.js. Uses a generator and runs the selectsort algorithm.

  File goldsort-manager.js. Uses a generator and runs the gold's poresort algorithm.


Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, Sorting-Race.html, into a browser
    window.  The example P5 program should start immediately.  You
    should see a grid with 4 columns and the name of each sorting algorithm at the top of each column.

Known Bugs

  - Console will show a split error, but if you refresh the page the error goes away
  - Gold Pore's Sort algorithm is implemented but does not output

Credits

  Some code was borrowed and modified from Stuart's book.  
    Introducing JavaScript Game Development: Build a 2D Game from the
    Ground Up, by Graeme Stuart, 2018, 209 pages. Code was also borrowed from reactgo.com and from Charles Siska's lecture.

  And, of course, thanks to the HTML and P5.js developers.
