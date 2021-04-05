// Authors: Ryan Patrick
// Description: Class to handle row-level data and functions.

var a = 260;
var b = 100;

var x = 490;
var y = 100;

var c = 50;
var d = 100;

class RowManager {

    constructor(hexString) {
        this.row = 0;
        this.arr = hexString.split('');
        this.mergeMgr = new MergeSortManager();
        this.mergeGenerator = this.mergeMgr.mergesortGenerator(this.arr);
        this.quickMgr = new QuickSortManager();
        this.quickGenerator = this.quickMgr.quicksortGenerator(this.arr);
        this.selectMgr = new SelectSortManager();
        this.selectGenerator = this.selectMgr.selectsortGenerator(this.arr);
    }

    set_arr(hexString) {
        this.arr = hexString.split('');
        this.mergeGenerator = this.mergeMgr.mergesortGenerator(this.arr);
        this.quickGenerator = this.quickMgr.quicksortGenerator(this.arr);
        this.selectGenerator = this.selectMgr.selectsortGenerator(this.arr);
    }

    update_row() {
        let results1 = [];
        let results2 = [];
        let results3 = [];


        let done = true;
        // One pass of Mergesort
        let val1 = this.mergeGenerator.next().value;
        console.log(val1);
        results1.push(val1);
        // One pass of Quicksort
        //val = this.quickGenerator.next().value;
        //console.log(val);
        //results.push(val);
        // One pass of Quicksort
        let val2 = this.quickGenerator.next().value;
        let val3 = this.selectGenerator.next().value;

        //console.log(val);
        //console.log(val2);
        //console.log(this.row);
        results1.push(val1);
        results2.push(val2);
        results3.push(val3);



        textSize(10);//Quicksort
        text (val2, a, b);
        b += 20;

        textSize(10);//SELECTIONSORT
        text (val3, x, y);
        y += 20;

        textSize(10); //mergeSort
        text (val1, c, d);
        d += 20;

      /*  textSize(10);
        text (val, x, y);
        y += 20;
*/
        // One pass of Selection Sort
        //let val = this.selectGenerator.next().value;
        //console.log(val);
        //results.push(val);
        // One pass of Gold's Pore Sort

        // Val will be undefined only once the sort has finished.
        // Therefore, all vals must be undefined for us to be done.
        results1.forEach(val1 => {
            if(typeof val != 'undefined') {
                done = false;
            }
        });

      /*  results.forEach(val2 => {
            if(typeof val2 != 'undefined') {
                done = false;
            }
        });*/

        this.row++;
        return done;
    }
}
