// Authors: Ryan Patrick
// Description: Class to handle row-level data and functions.

var a = 260;
var b = 100;

var x = 490;
var y = 100;

var c = 50;
var d = 100;

var e = 520;
var f = 100;

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
        // this.goldMgr = new GoldSortManager();
        // this.goldGenerator = this.goldMgr.goldsortGenerator(this.arr);
    }

    set_arr(hexString) {
        this.arr = hexString.split('');
        this.mergeGenerator = this.mergeMgr.mergesortGenerator(this.arr);
        this.quickGenerator = this.quickMgr.quicksortGenerator(this.arr);
        this.selectGenerator = this.selectMgr.selectsortGenerator(this.arr);
        // this.goldGenerator = this.goldMgr.goldsortGenerator(this.arr);
    }

    update_row() {
        let results = [];

        let done = true;
        // One pass of Mergesort
        let val1 = this.mergeGenerator.next().value;
        //console.log(val1);
        // One pass of Quicksort
        let val2 = this.quickGenerator.next().value;
        // console.log(val2);
        // One pass of Selection Sort
        let val3 = this.selectGenerator.next().value;
        // One pass of Gold's Pore Sort
        // let val4 = this.goldGenerator.next().value;

        results.push(val1);
        results.push(val2);
        results.push(val3);
        // results.push(val4);

        // console.log(val1);
        // console.log(val2);
        // console.log(val3);
        textSize(10); //mergeSort
        text (val1, c, d);
        d += 20;
        
        textSize(10);//Quicksort
        text (val2, a, b);
        b += 20;

        textSize(10);//SELECTIONSORT
        text (val3, x, y);
        y += 20;
      
        // textSize(10);//Gold's Pore
        // text (val4, e, f);
        // y += 20;

        // Val will be undefined only once the sort has finished.
        // Therefore, all vals must be undefined for us to be done.
        results.forEach(val => {
            if(typeof val != 'undefined') {
                done = false;
            }
        });

        this.row++;
        return done;
    }
}
